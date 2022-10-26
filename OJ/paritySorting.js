function paritySort(n,arr){
    let a1 = [];
    let a2 = [];
    for(let i=0;i<n;i++){
        if(arr[i]%2==0){
            a1.push(arr[i])
        }else{
            a2.push(arr[i])
        }
    }
    
    a2.sort((a,b)=>a-b);
    a1.sort((a,b)=>a-b);
    let str="";
    for(let i=0;i<a2.length;i++){
        str+=a2[i]+" "
    }
    for(let i=0;i<a1.length;i++){
        str+=a1[i]+" "
    }
    return str;
    // console.log(a1,a2)
}

function runProgram(input)
{
	input = input.split("\n")
    let n = +input[0];
   
    let arr = input[1].split(' ').map(Number)
    console.log(paritySort(n,arr))
    
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