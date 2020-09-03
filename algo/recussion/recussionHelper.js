function collectOddValues (arr) {
    let result = [];

    function helper(arr){
        if(arr.length == 0) return
        if(arr[0] % 2 !== 0 ) {
        result.push(arr[0])
        }
        helper(arr.slice(1))
     }

    helper(arr)
    return result
}


let test = [2,6,9,2,1,8,5,6,3]

// console.log(collectOddValues(test))


