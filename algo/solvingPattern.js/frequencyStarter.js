// frequency counter method

function validAnagram(first, second){
    if(first.length != second.length){
        return false
    }

    let obj = {}

   for(char of first){
       obj[char] ? obj[char] += 1 : obj[char] = 1;

// console.log(char)
console.log(obj)
   console.log(obj[char])

   }

   for(char of second){
    if(!obj[char]) { 
        return false
    }else {
        obj[char] -=1;
    }
       
   }
   return true;
}

console.log(validAnagram('caa', 'atc'))