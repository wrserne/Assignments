function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
  }



var favoriteNumber = 42;

var instructor = {
  firstName(){
      return "Colt"
  }
  
}
instructor[favoriteNumber] = "That is my favorite!"

var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }

  let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

const instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }
  



  const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

  function createAnimal(species, verb, noise){
      return{
          species,
          [verb](){
              return noise;
          }
          }
      }
  

