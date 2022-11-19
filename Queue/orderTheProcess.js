function orderProcess(gO,iO){
    let count = 0;
    while (gO.length > 0) {
        if (gO[0] == iO[0]) {
            gO.shift();
            iO.shift();
        } else {
            gO.push(gO.shift())
        }
        count++;
    }
 
    return count;
}

function runProgram(input)
{
	input = input.split("\n")
    let n = +input[0];
    let arr1 = input[1].split(" ").map(Number)
 
    let arr2 = input[2].split(" ").map(Number)
  
    console.log(orderProcess(arr1,arr2));
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