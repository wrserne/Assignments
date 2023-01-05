
function clearError() {

    $("#msg").text('');

    // clear the error class (red font) from labels
    $("#movie-title").prev().removeClass('error');
    $("#movie-rating").prev().removeClass('error');
    $("#msg").removeClass('error');

}


function formInputsAreValid() {

    let validValues = false;

    let movieTitle = $("#movie-title").val();

    if (movieTitle) {

        if (movieTitle.length > 1) {
            validValues = true;
        } else {
            $("#msg").text('Movie titles must be at least 2 characters.');
            $("#movie-title").prev().addClass('error');
        }
    } else {
        $("#msg").text('Movie titles must be at least 2 characters.');
        $("#movie-title").prev().addClass('error');
    }

    // if we have a valid movie title from above, check the rating range
    if (validValues) {

        validValues = false;

        // force a 0 so they don't have to type 0.
        let movieRating = 0 + $("#movie-rating").val();

        if ((movieRating >= 0) && (movieRating <= 10)) {
            validValues = true;
        } else {
            $("#msg").text('Movie rating must be between 0 and 10.');
            $("#movie-rating").prev().addClass('error');
        }

    }

    return validValues;

}


function buildStarString(inRating) {

    let outRating = ("&#x2B50;").repeat(Math.round(inRating));

    return outRating;
};


// handle the add movie button click
$("#button-add").on("click", function (event) {

    event.preventDefault();

    clearError();

    if (formInputsAreValid()) {

        // build:
        //  <div>
        //    "Title" star rating  <button>test button3</button>
        //  </div>
        let movieDetails = `"${$("#movie-title").val()}"&nbsp;&nbsp;`
        movieDetails = movieDetails + `  ${buildStarString($("#movie-rating").val())}`

        let $movieDiv = $("<div>").html(movieDetails).addClass("movie-details");
        $("<button>").text("X").addClass("rmvbutton").appendTo($movieDiv);
        $(".movies").append($movieDiv);

        // clear all inputs
        $('input').val('');

    }

});


// handle the delete button click
$(".movies").on("click", ".rmvbutton", function () {



    $(this).parent().remove();

});
