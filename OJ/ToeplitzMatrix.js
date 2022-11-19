function isToeplitz(mat,r,c){
    for(let i=0;i<c;i++){
        if(!isDiagonal(mat,0,i,r,c)){
            return "NO";
        }
    }
    for(let i=0;i<r;i++){
        if(!isDiagonal(mat,i,0,r,c)){
            return "NO";
        }
    }
    return "YES";
}
function isDiagonal(mat,i,j,r,c){
    let res = mat[i][j];
    while(++i<r && ++j<c){
        if(mat[i][j]!=res){
            return false;
        }
    }
    return true;
}
function runProgram(input)
{
	input = input.split("\n")
    let t = +input[0];
    let j=1;
    for(let i=0;i<t;i++){
        let arr =[]
        let [r,c] = input[j++].split(' ').map(Number)
        for(let k=0;k<r;k++){
         arr.push(input[j++].split(' ').map(Number))
        }console.log(isToeplitz(arr,r,c))
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