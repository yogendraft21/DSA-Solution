var countBits = function(n){
    var ans = []
    for(let i=0;i<=n;i++){
        ans.push(binary(i))
    }
    let str  = ""
    for(let i=0;i<ans.length;i++){
        str+=ans[i]+" "
    }
    return str;
    
    
    function binary(num){
        if(num==0 || num==1){
            return num;
        }
        if(num%2==0){
            return binary(Math.floor(num/2));
        }else{
            return 1+binary(Math.floor(num/2));
        }
    }
}

function runProgram(input)
{
	input = input.split("\n")
    let t = +input[0];
    let j=1;
    for(let i=0;i<t;i++){
       let n = +input[j++];
        console.log(countBits(n))
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