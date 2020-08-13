function countDown(num) {
if (num == 5) {
console.log('all done')
return;
}
console.log(num);
num--
countDown(num)
}

// console.log(countDown(10))

function sumRange(num){
    if(num ===1 ) return 1
    return num * sumRange(num-1)
}

// sumRange(5)

function multipier(num){
    if(num == 1) return 1
    return num * multipier(num-1)

}

// multipier(5)

function multi(num){
    let total = 1;
    for(let i = num; i > 0; i--){
        console.log(i);
        total *= i;
    }
      return total
}

console.log(multi(5))