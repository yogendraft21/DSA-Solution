// A. Medium Number
// time limit per test1 second
// memory limit per test256 megabytes
// inputstandard input
// outputstandard output
// Given three distinct integers a, b, and c, find the medium number between all of them.

// The medium number is the number that is neither the minimum nor the maximum of the given three numbers.

// For example, the median of 5,2,6 is 5, since the minimum is 2 and the maximum is 6.

// Input
// The first line contains a single integer t (1≤t≤6840) — the number of test cases.

// The description of each test case consists of three distinct integers a, b, c (1≤a,b,c≤20).

// Output
// For each test case, output a single integer — the medium number of the three numbers.

// Example
// inputCopy
// 9
// 5 2 6
// 14 3 4
// 20 2 1
// 1 2 3
// 11 19 12
// 10 8 20
// 6 20 3
// 4 1 3
// 19 8 4
// outputCopy
// 5
// 4
// 2
// 2
// 12
// 10
// 6
// 3
// 8

function medianNum(a,b,c){
    if((a>b && a<c) || (a<b && a>c)){
        return a;
    }
    else if((b>a && b<c) || (b<a && b>c)){
        return b;
    }else if((c>a && c<b) || (c<a && c>b)){
        return c;
    }
}
// let a=10,b=11,c=19
const prompt = require('prompt-sync')();
let t = prompt();
while(t--){
    let a = prompt()
    let b = prompt()
    let c = prompt();
    console.log(medianNum(a,b,c))
}
