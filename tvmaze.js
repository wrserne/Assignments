async function searchShows(query) {
  let res = await axios.get("http://api.tvmaze.com/search/shows", {
    params: {
      q: query
    }
  });

  let shows = res.data.map(function(value){
    let show = value.show;
    return {
      id: show.id,
      name: show.name,
      summary: show.summary,
      image: show.image
    };
  }
  )
  return shows;
}

const missingImageLink = "https://tinyurl.com/tv-missing";


function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();

try {
  for (let show of shows) {
    let $item = $(
      `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
          <img class="card-img-top " src="${show.image.original}">
           <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
             <button class="btn btn-primary get-episodes">Episodes</button>
           </div>
         </div>
       </div>
      `);

    $showsList.append($item);
}
  } catch (error) {
    for (let show of shows) {
      let $item = $(
        `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
           <div class="card" data-show-id="${show.id}">
            <img class="card-img-top " src="${missingImageLink}">
             <div class="card-body">
               <h5 class="card-title">${show.name}</h5>
               <p class="card-text">${show.summary}</p>
               <button class="btn btn-primary get-episodes">Episodes</button>
             </div>
           </div>
         </div>
        `);
        
    $showsList.append($item);
  };
}};


 $("#search-form").on("submit", async function handleSearch (evt) {
  evt.preventDefault();

  let query = $("#search-query").val();
  if (!query) return;

  $("#episodes-area").hide();

  let shows = await searchShows(query);

  populateShows(shows);

  
});


async function getEpisodes(id) {
  let res = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);
  
  console.log(res.data);

  let episodes = res.data.map(function(value){
    return {
      id: value.id,
      name: value.name,
      season: value.season,
      number: value.number,
      summary: value.summary,
    };
  })
  return episodes;
}

function populateEpisodes(episodes) {
  const $episodesList = $("#episodes-list");
  $episodesList.empty();

  for (let episode of episodes) {
    let $item = $(
      `<li class="episode info">${episode.name} (season ${episode.season}, episode ${episode.number})
            <li>${episode.summary}</li>
       </li>`
      );

    $episodesList.append($item);
}

  $("#episodes-area").show();
};

$("#shows-list").on("click", ".get-episodes", async function handleEpisodeClick(evt) {
  let showId = $(evt.target).closest(".Show").data("show-id");
  let episodes = await getEpisodes(showId);
  populateEpisodes(episodes);
});