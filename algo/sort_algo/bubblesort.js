//naive method

let sort = (arr,idex1,idex2) => [arr[idex1], arr[idex2]] = [arr[idex2], arr[idex1]]

function swap(arr,idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];

    arr[idx2] = temp
}


function bubbleSort(arr){
  
 for(let i = 0; i < arr.length ; i++){
 for(let j = 0; j < arr.length; j++){
     console.log(arr[j], arr[j + 1])
    if(arr[j] > arr[j + 1]){
       var temp = arr[j];
       arr[j] = arr[j + 1];
       arr[j + 1] = temp;
    }
      }
    }
    return arr
}

function bubbleSort2(arr){
  
 for(let i = arr.length; i > 0; i--){
 for(let j = 0; j < i - 1; j++){
     console.log(arr[j], arr[j + 1])
    if(arr[j] > arr[j + 1]){
       var temp = arr[j];
       arr[j] = arr[j + 1];
       arr[j + 1] = temp;
    }
      }
    }
    return arr
}
console.log(bubbleSort2([5,3,12]))