function social(age){
    if(age<13)
{
    console.log("1 Kms");
}
else if(age>=13 && age<18)
{
    console.log("5 Kms");
}
else if(age>=18 && age<30)
{
    console.log("10 Kms");
}
else
{
    console.log("You can have friends from anywhere");
}
}
function runProgram(input)
{
	social(+input);
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