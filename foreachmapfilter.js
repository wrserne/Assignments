
function doubleValues(arr){
    let newArray= [];
    arr.forEach(function(val){
        newArray.push(val * 2);
    });
        return newArray;
    
    }


function onlyEvenValues(arr){
    let newArray= [];
    arr.forEach(function(val){
        if (val %2===0){
            newArray.push(val);

        }
    });
    return newArray;
}


function showFirstAndLast(arr){
    let newArray= [];
    arr.forEach(function(val){
        newArray.push((val.charAt(0))+ val.charAt(val.length-1));
    
});
 
    return newArray;
}



function addKeyAndValue(arr,key,value){
    let newArray=[];
    arr.forEach(function(arr){
        newArray.push(arr);
        newArray.push(key,value);

    });
    return newArray;

    }




function vowelCount(str){
    let splitWrd= str.toLowerCase().split("");
    let obj= {};
    splitWrd.forEach(function(val){
        if ('aeiou'.indexOf(val)!== -1){
            obj[val]= (obj[val] || 0) +1;
        }
    });
    return obj;

    }
    

   

function doubleValuesWithMap(arr) {
    let newArray= [];
    arr.map(function(arr){
        newArray.push(arr*2);

    });
    return newArray;



}


function valTimesIndex(arr){
    return arr.map(function(val,idx){
        return val * idx;

    });
}


function extractKey(arr, key){
    return arr.map(function(val){
        return val[key];
    });
    
}


function extractFullName(arr){
    
    return arr.map(function(val){
        return val.first+" "+ val.last

    });
}


function filterByValue(arr, key) {

    return arr.filter(function(val){
        return val[key]!== undefined;
    
    });
}



function find(arr, searchValue) {
    return arr.filter(function(val){
        return val === searchValue;
    })[0]; 
}



function findInObj(arr, key, searchValue) {
    return arr.filter(function(val){
        return val[key]=== searchValue;
    })[0];
    }



function removeVowels(str) {
    const vowels = 'aeiou';
    return str
    .toLowerCase()
    .split("")
    .filter(function(val){
        return vowels.indexOf(val)=== -1;
    })
    .join("");
}

function doubleOddNumbers(arr){
        return arr
          .filter(function(val) {
            return val % 2 !== 0;
          })
          .map(function(val) {
            return val * 2;
          });
        }
