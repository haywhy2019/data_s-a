function addUpTo(n) {
return n * (n + 1) /2;
}

var t1 = performance.now();
addUpTo(100000000);
var t2 = performance.now();
console.log(`time elapsed: ${(t2-t1) / 1000} seconds.`)