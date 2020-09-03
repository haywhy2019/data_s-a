// pseudocode

// * store the first element as the smallest
// * compare this item to the next item in the array until 
//   you find a smaller number
// * if a smaller number is found, designate that smaller number to
//   the new minimum and continue untill the end of the array.
// * if the minimum is not the value(index) you initially began  
//   with, swap the two values.
// * Repeat thiswith the next element until the array is sorted.



function selectionSort(arr){
  
    for(let i = 0; i< arr.length; i++){
        // * store the first element as the smallest
          let smallest = i
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j ] < arr[smallest]){
                smallest = j
            }
            if(i !== smallest){
                  var temp = arr[i]
            arr[i] = arr[smallest]
            arr[smallest] = temp
            }
          
        }
    }
    return arr
}

selectionSort([37,45,29,8])