 
function sumZero2(arr){
    let left = 0,
    right = arr.length -1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]]
        }else if(sum > 0){
right --
} else {
    left++
}

    }
}

// console.log(sumZero([-3,-1,0,1,2,3]))

//exercise 
function countUniqueValues(arr){
 let i = 0;
 for(let j of arr){
//        console.log(j)
     if(arr[i] != j){
         i++;
//          console.log(arr[i])
     }
   
 }
   return i + 1 ;
}

console.log(countUniqueValues([1,1,1,1,3,4,5]))
