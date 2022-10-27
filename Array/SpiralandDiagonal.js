function DiagonalSum(n,arr){
    let sum=0;
    let newArr = [];
    let matrix = [];
    
    for(let i=0;i<n;i++){
        newArr= []
        for(let j=0;j<n;j++){
            newArr.push(0)
        }
        matrix.push(newArr)
    }
    
    let top = 0,left=0,right=n-1,btm=n-1;
    let index=0;
    while(index<n*n){
        for(let i=left;i<=right;i++){
            matrix[top][i] = arr[index]
            index++;
        }
        top++;
        for(let i=top;i<=btm;i++){
            matrix[i][right]  = arr[index]
            index++;
        }
        right--;
        for(let i=right;i>=left;i--){
            matrix[btm][i] = arr[index]
            index++;
        }
        btm--;
        for(let i=btm;i>=top;i--){
            matrix[i][left] = arr[index]
            index++;
        }
        left++;
    }

    
    // console.log(matrix);


    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(i==j){
                sum+=matrix[j][i]
              
            }
            else if((i+j) == n-1){
                sum+=matrix[j][i]
                
            }
        }
    }
    return sum;
}
function runProgram(input)
{
	input = input.trim().split("\n")
    let t = +input[0];
    let j=1;
    let arr=[]
    let n=0;
    for(let i=0;i<t;i++){
        n = +input[j++]
        arr = input[j++].trim().split(' ').map(Number)
        console.log(DiagonalSum(n,arr))
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