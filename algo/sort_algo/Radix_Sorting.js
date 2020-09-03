// Radix sort pseudocode

// *define a function that accepts list of number
// *figure out how many digits the largest number has
// *loop from k=0 up to this largest number of digits
// *for each iteration of the loop;
//     *create buckets for each digit(0-9)
//     *place each number in the corresponding buckets
//     based on its kth digit
// *replace our existing array with values in our buckets,
// starting with 0 and going up to 9
// *return list at the end!


function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10,i) % 10);
}

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums){
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
}

function radixSort(nums){
    let maxDigitCount =mostDigits(nums);
    console.log(maxDigitCount)
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
          let digit =  getDigit(nums[i], k);
          digitBuckets[digit].push(nums[i]);
        }

        nums = [].concat(...digitBuckets);

    }
    return nums
}

radixSort([23,568,89,1234567,90])