//step 1

// *create an empty array, take a look at the smallest values
// in each input array.
// *while there are still valueswehavent looked at....... 
//     *if the values in the first array is smaller than there values    
//     in the second array, push the value in the first array into our
//     resultand move on to the next value in the srcond array
//     *once we exhaust on array, push in all remaining values
//     from the other array.

function merge(arr1, arr2){
 let results = [];
 let i = 0;
 let j = 0;
  
  while(i < arr1.length && j < arr2.length){
      if(arr2[j] > arr1[i]){
          results.push(arr1[i]);
          i++
      } else {
            results.push(arr2[j]);
            j++
      }
  }
  while(i < arr1.length){
results.push(arr1[i])
i++ 
}
 while(j < arr2.length){
results.push(arr2[j])
j++ 
}
 return results
}


//step 2

// *break up the array into halves until you have arrays that
//  are empty or have one element
// *once you have smaller sorted arrays, merge those arrays 
//  with other sorted arrays until you are back at the full 
//  length of the array
// *once the array has been merged back together, return th
//  emerged(and sorted) array
function mergeSort(arr){
    //recussion
 if(arr.length <= 1) return arr;
 let mid = Math.floor(arr.length/2);
 let left = mergeSort(arr.slice(0,mid));
 let right = mergeSort(arr.slice(mid));
 
 //called the merge function in step1
 return merge(left, right)
}

mergeSort([10,24,76,73,72,1,9])