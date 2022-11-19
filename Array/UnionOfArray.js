// Union of Two Sorted Arrays
// Problem Statement: Given two sorted arrays, arr1 and arr2 of size n and m. Find the union of two sorted arrays.

// The union of two arrays can be defined as the common and distinct elements in the two arrays.NOTE: Elements in the union should be in ascending order.

// Examples:

// Example 1:
// Input:
// n = 5,m = 5.
// arr1[] = {1,2,3,4,5}  
// arr2[] = {2,3,4,4,5}
// Output:
//  {1,2,3,4,5}

// Explanation: 
// Common Elements in arr1 and arr2  are:  2,3,4,5
// Distnict Elements in arr1 are : 1
// Distnict Elemennts in arr2 are : No distinct elements.
// Union of arr1 and arr2 is {1,2,3,4,5} 

// Example 2:
// Input:
// n = 10,m = 7.
// arr1[] = {1,2,3,4,5,6,7,8,9,10}
// arr2[] = {2,3,4,4,5,11,12}
// Output: {1,2,3,4,5,6,7,8,9,10,11,12}
// Explanation: 
// Common Elements in arr1 and arr2  are:  2,3,4,5
// Distnict Elements in arr1 are : 1,6,7,8,9,10
// Distnict Elemennts in arr2 are : 11,12
// Union of arr1 and arr2 is {1,2,3,4,5,6,7,8,9,10,11,12} 

function findUnion(arr1, arr2, n, m)
    {
        const mp = new Map();
        for(let  i = 0;i<n;i++){
            mp.set(arr1[i],arr1[i]);
        }
        for(let  i = 0;i<m;i++){
            mp.set(arr2[i],arr2[i]);
        }
        arr1 = [];
        for(let [k,v] of mp){
            arr1.push(parseInt(k))
        }
        return arr1.sort((a,b)=>a-b);
    }

let arr1 = [1,2,3,4,5,6,7,8,9,10]
let arr2 = [2,3,4,4,5,11,12]
let n = arr1.length;
let m = arr2.length;
console.log(findUnion(arr1,arr2,n,m))