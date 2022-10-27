function Reduce(str){
    let st=[]
    let i=0;
    while(i<str.length){
        if(st.length==0 || str[i]!=st[st.length-1]){
            st.push(str[i])
            i++;
        }
        else{
            st.pop()
            i++;
        }
    }
    if(st.length==0){
        return "Empty String"
    }else{
        let result=''
        while(st.length!=0){
            result=st[st.length-1]+result;
            st.pop()
        }
        return result;
    }
}
function runProgram(input)
{
	let str  = input;
	console.log(Reduce(str))
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