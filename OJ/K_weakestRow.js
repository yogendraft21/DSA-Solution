var weakRows = function(K,mat){
    let ans =[];
    for(let index=0;index<mat.length;index++){
        let sum = mat[index].reduce((sum,item)=>sum+item,0)
        ans.push({index,sum});
    }
    ans.sort((a,b)=>a.sum<b.sum?-1:1)
    let res = []
    for(let i=0;i<K;i++){
        let item = ans[i]
        res.push(item.index)
    }
    
    let str = ""
    for(let i=0;i<res.length;i++){
        str+=res[i]+" "
    }
    return str;
}

function runProgram(input)
{
	input = input.split("\n")
    let [r,c,k] = input[0].split(' ').map(Number)
    let arr = []
    let line=1;
    for(let i=0;i<r;i++){
        
         arr.push(input[line++].split(' ').map(Number))
    }
    console.log(weakRows(k,arr))
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