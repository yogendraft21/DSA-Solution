// You are given an array A of size N. You need to print elements of A in alternate order (starting from index 0).
// Input:
// N = 4
// A[] = {1, 2, 3, 4}
// Output:
// 1 3

function print(arr,n){
    let str=""
    for(let i=0;i<n;i++){
        if(i%2==0){
            str+=arr[i]+" "
        }
    }
    console.log(str)
  }