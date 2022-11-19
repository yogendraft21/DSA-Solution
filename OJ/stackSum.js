let top = -1;
let sum=0;
function stackSum(arr){
    if(top!=-1){
        sum = sum+arr[top]
        arr.pop()
        top--;
    }else{
        sum = sum-1;
    }
    
    
}

function runProgram(input)
{
	input = input.split("\n")
    let t = +input[0];
    let j=1;
    let arr = []
    for(let i=0;i<t;i++){
        let [q,n] = input[j++].split(' ').map(Number)
        if(q==1){
            arr.push(n)
            top++;
        }
        if(q==2){
            stackSum(arr)
        }
    }
    console.log(sum)
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