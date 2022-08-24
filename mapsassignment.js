//question 1
it should return {1,2,3,4};


//question 2
it should return "ref"

//question 3
0: {Array(3) => true}
1: {Array(3) => false}


//question 4

const hasDuplicate = arr => new Set(arr).size !== arr.length

//question 5

function isVowel(char){
    return "aeiou".includes(char);
  }
  
  function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lowerCaseChar = char.toLowerCase()
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }