let top=-1;
function push(arr,value){
    if(top == arr.length-1){
        return;
    }
    top++;
    arr[top] = value;
    return;
}
function pop(arr){
    if(top == -1){
        return;
    }
    
    top--;
    return;
}
function peek(arr){
   
    if(top!=-1){
      console.log(arr[top]);
      return;
    }
    console.log("Empty!")
}
function runProgram(input)
{
    input = input.split("\n");
    let n = +input[0];
    let arr = [n];
    for(let i=0;i<n;i++){
        arr.push(-1);
    }
    for(let i=1;i<=n;i++){
        if(input[i]==2){
            pop(arr);
        }
        else if(input[i]==3){
            peek(arr);
        }else{
            let [num,value] = input[i].split(" ").
            map(Number);
            
            push(arr,value);
            
        }
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