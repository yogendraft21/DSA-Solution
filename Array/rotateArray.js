// 189. Rotate Array
// Medium

// 12114

// 1445

// Add to List

// Share
// Given an array, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
 

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105
 

// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?







function reverseArr(arr,i,j){
    let li=i,lj=j;
    while(li<lj){
        let temp = arr[li]
        arr[li] = arr[lj]
        arr[lj] = temp;
        li++;
        lj--; 
    }
}

function rotate(arr,k){
    k = k%arr.length;
    if(k<0){
        k+=arr.length;
    }
    reverseArr(arr,0,arr.length-k-1);
    reverseArr(arr,arr.length-k,arr.length-1);
    arr.reverse();


}



// var rotate = function(nums,k){
//     let arr = []
//     for(let i=nums.length-k;i<nums.length;i++){
//         arr.push(nums[i])
//     }
//     for(let i=0;i<nums.length-k;i++){
//         arr.push(nums[i])
//     }
//     return arr
// }

let nums = [-1,-100,3,99]
let k =2;
console.log(rotate(nums,k))