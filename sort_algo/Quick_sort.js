//pivot helper
// *in orderto implement mergr sort, its useful to first implement a function
//  responsible for arranging elements in an array on either side of a pivot
// *given an array, this helper function should designate an element as the pivot
// *it should then rearrange elements in the array so that all values less than the pivots 
//  are moved to the right of the pivot
// *the order of elements on either side of the pivot doesnt matter
// *the helper should do this in place, that is, it should not create a new array
// *when complete, the helper should retirn the index of the pivot

//pivot pseudocode

// *it will accept three arguments; an array, a start index,
//  and an end index(these can default to 0 and the array length 
//  minus 1, respectively)
// *grab the pivot from the start of the array
// *store the current pivot index in a variable(this will keeptrack of
// where the pivot should end)
// *loop through the array from the start untill the end
//     *if the pivot is greater than thecurrent element, increment the
//     pivot index variable and then swap the current element with
//     the element at the pivot index
//     *swap the starting element(i.e the pivot) with the pivot index

function pivot(arr, start=0, end= arr.length+1){
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

 var pivot = arr[start];
 var swapIdx = start;

 for(var i = start + 1; i < arr.length; i++){
      if(pivot > arr[i]){
          swapIdx++
          swap(arr, swapIdx, i)
      }   
      
 }
   swap(arr,start,swapIdx)
          return swapIdx;
}


function quickSort(arr, left=0, right=arr.length - 1){
    if (left < right){
    let pivotIndex = pivot(arr, left,right)
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex+1, right);
    }
    return arr

}

quickSort([4,8,2,1,5,7,6,3])