// Problem Statement: Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.

// Examples:

// Example 1:
// Input: [1,2,4,7,7,5]
// Output: Second Smallest : 2
// 	Second Largest : 5
// Explanation: The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5 and second smallest is 2

// Example 2:
// Input: [1]
// Output: Second Smallest : -1
// 	Second Largest : -1
// Explanation: Since there is only one element in the array, it is the largest and smallest element present in the array. There is no second largest or second smallest element present.

// solution-1-----------
// const findElement =(arr)=>{
//       let min=Infinity,s_min=Infinity,max=-Infinity,s_max=-Infinity

//       for(let i=0;i<arr.length;i++){
//          if(arr[i]<min){
//             min = arr[i]
//          }
//          if(arr[i]>max){
//             max=arr[i]
//          }
//       }
//       for(let i=0;i<arr.length;i++){
//             if(arr[i]<s_min && arr[i]!=min){
//                 s_min  = arr[i]
//             }
//             if(arr[i]>s_max && arr[i]!=max){
//                 s_max  = arr[i]
//             }
//       }
//       console.log(s_min,s_max)
// }
// let arr =[1,2,4,7,7,5]

// if(arr.length<2){
//     console.log(-1)
// }else{
//     findElement(arr)
// }

const findSecondSmall = (arr)=>{
    let small=Infinity,s_small=Infinity

    for(let i=0;i<arr.length;i++){
        if(arr[i]<small){
            s_small = small;
            small = arr[i]
        }else if(arr[i]<s_small && arr[i]!=small){
            s_small = arr[i]
        }
    }
    return s_small;
}
const findSecondLarge = (arr)=>{
    let large=-Infinity,s_large=-Infinity

    for(let i=0;i<arr.length;i++){
        if(arr[i]>large){
            s_large = large;
            large = arr[i]
        }else if(arr[i]>s_large && arr[i]!=large){
            s_large = arr[i]
        }
    }
    return s_large;
}



let arr = [1,2,4,7,7,5]

if(arr.length<2){
    console.log(-1)
}else{
    console.log(findSecondLarge(arr))
    console.log(findSecondSmall(arr))
}