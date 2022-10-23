// Given a Integer array A[] of n elements. Your task is to complete the function PalinArray. Which will return 1 if all the elements of the Array are palindrome otherwise it will return 0.
// Input:
// 2
// 5
// 111 222 333 444 555
// 3
// 121 131 20

// Output:
// 1
// 0

// Explanation:
// For First test case.
// n=5;
// A[0] = 111    //which is a palindrome number.
// A[1] = 222   //which is a palindrome number.
// A[2] = 333   //which is a palindrome number.
// A[3] = 444  //which is a palindrome number.
// A[4] = 555  //which is a palindrome number.
// As all numbers are palindrome so This will return 1.

function PalinArray(arr,n){
    //code here
    let str="";
    let newstr="";
    for(let i=0;i<n;i++){
        str = arr[i].toString();
        newstr = str.split("").reverse().join("");
        if(str!==newstr){
            return 0;
        }
    }
    return 1;
}

let arr = [[111],[222],[333],[444]];
let n = arr.length;
console.log(PalinArray(arr,n));