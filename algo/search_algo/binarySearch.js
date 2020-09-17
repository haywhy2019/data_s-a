function sortedArr(arr,val){
    let start = 0,
    end = arr.length -1,
    middle = Math.floor((start + end)/2); 

  while(arr[middle] !== val && start <=end){
      if(val < arr[middle]) {
         end = middle -1
      }
      else{ start = middle + 1}
      middle =  Math.floor((start + end)/2); 
  }
  return arr[middle] == val ? val : 'not found'
}

let test = [1,2,3,4,5,6,7,8,9,10]

console.log(sortedArr(test,1))