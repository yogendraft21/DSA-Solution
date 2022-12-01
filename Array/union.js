let arr = [1,2,3,4,5,6];
let arr2 = [2,3,4,5,6,7,8];
const myMap = new Map()


for(let i=0;i<arr.length;i++){
   myMap.set(arr[i]++);
}
for(let i=0;i<arr2.length;i++){
   myMap.set(arr2[i]++);
}

let str = ""
for(const[key,value] of myMap){
    str+=key+" "
}

console.log(str)
// console.log(myMap1)