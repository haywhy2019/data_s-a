// insertion sort pseudocode

// * start by picking the second element in the array
// * now compare thesecond element with the one before
// it and swap if necessary.
// * continue to the next element and if it is in the incorrect order
// iterate through the sorted portion(i.e the left side) to place the element in the correct place.
// *repeat until the array is sorted

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
           
           arr[j+1] = arr[j]
           console.log(arr)
        }
        arr[j+1] = currentVal;
    }
    return arr;
}
insertionSort([37,45,29,8,5,3,20,0])