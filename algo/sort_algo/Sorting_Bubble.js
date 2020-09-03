function bubbleSort(arr){
    for(var i = 0;i < arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+ 1]){
                console.log(arr)
   var temp = arr[j]
   arr[j] = arr[j + 1]
   arr[j + 1] = temp
}
        }
    }
    return arr
}

bubbleSort([37,45,29,8])