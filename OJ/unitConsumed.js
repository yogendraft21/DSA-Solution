function unitCon(n){
    n-=80;
  if(n<=0){
      return 0
  }
  else if(n<=150){
      console.log(n/3)
  }else if(n<=650){
      n-=150;
      console.log(50+(n/5))
  }else{
      n-=650
      console.log(n/10 +100+50)
  }
}
function runProgram(input)
{
  unitCon(+input);
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