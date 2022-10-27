function findSmaller(n,arr){
    let s =[];
    let str=""
    for(let i=0;i<n;i++){
        while(s.length!=0 && s[s.length-1]>=arr[i]){
            s.pop();
        }
        if(s.length==0){
            str+="-1"+" "
        }
        else{
            str+=s[s.length-1]+" "
        }
        s.push(arr[i])
    }
    return str;
 }
 
 
 function runProgram(input)
 {
     input = input.split("\n")
     let n = +input[0];
   
     
      let arr = input[1].split(' ').map(Number)
         console.log(findSmaller(n,arr))
     
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