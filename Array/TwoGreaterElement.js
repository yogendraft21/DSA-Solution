// Given an array of N distinct elements, the task is to find all elements in array except two greatest elements in sorted order.
// Input : 
// a[] = {2, 8, 7, 1, 5}
// Output :
// 1 2 5 
// Explanation :
// The output three elements have two or
// more greater elements.   
function findElements(arr,n){
    //code here
    let a=[];
    arr.sort((a,b)=>a-b);
    for(let i=0;i<n-2;i++){
        a.push(arr[i])
    }
    return a;
    
 }
 let arr = [10,11,4]
 console.log(findElements(arr,arr.length))