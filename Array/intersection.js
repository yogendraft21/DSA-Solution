let arr = [1, 2, 3, 3, 4, 5, 6];
let arr2 = [3,5];


function interSection(arr,arr2){
    let l=0;
    let r=0;
    let str="";
    while(l<arr.length || r<arr2.length){
        if(arr[l]==arr2[r]){
            str+=arr[l]+" "
            l++;
            r++;
        }
        else if(arr[l]>arr2[r]){
            r++;
        }
        else{
            l++;
        }
    }
    return str;
}
console.log(interSection(arr,arr2))

// let str=''
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if(arr[i]==arr2[j]){
//             str+=arr[i]+" "
//         }
//     }
// }
// console.log(str)