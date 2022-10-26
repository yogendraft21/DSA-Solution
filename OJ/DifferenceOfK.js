function findDiff(n,k,arr){
    let l=0;
    let r=1;
    while(l<n){
        let diff  = Math.abs(arr[l] - arr[r])
    //   console.log(diff)
        if(diff==k){
            return "Yes"
        }
        else if(diff<k){
            r++;
        }else{
            l++;
        }
    }
    return "No"
}
function runProgram(input)
{
    input = input.split("\n")
    let t = +input[0];
    let j=1;
    for(let i=0;i<t;i++){
        let [n,k] = input[j++].split(' ').map(Number)
        let arr = input[j++].split(' ').map(Number)
        console.log(findDiff(n,k,arr))
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