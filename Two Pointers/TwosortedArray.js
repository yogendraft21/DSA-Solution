function commonElement(n,arr1,arr2){
    let count=0;
    let l = 0;
    let r = n-1;
    while(l<n && r>=0){
        if(arr1[l]==arr2[r]){
            count++;
            l++;
            r--;
        }else if(arr1[l]<arr2[r]){
            l++;
        }else if(arr1[l]>arr2[r]) {
            r--;
        }
    }
    console.log(count)
}
function runProgram(input)
{
    input = input.split("\n")
    let t = +input[0];
    let j=1;
    for(let i=0;i<t;i++){
        let n = +input[j];
        j++;
        let arr1 = input[j].split(" ").map(Number)
        j++;
        let arr2 = input[j].split(" ").map(Number)
        j++;
        
        commonElement(n,arr1,arr2)
    }
}
if (process.env.USERNAME === "") {
     runProgram(``);
 } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
         read += input;
     });
     process.stdin.on("end", function () {
         read = read.replace(/\n$/, "");
         read = read.replace(/\n$/, "");
         runProgram(read);
     });
     process.on("SIGINT", function () {
         read = read.replace(/\n$/, "");
         runProgram(read);
         process.exit(0);
     });
 }