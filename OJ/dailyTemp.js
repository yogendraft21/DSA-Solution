function findTemprature(n,arr){
    let s =[];
    let a=[];
    let str=""
    for(let i=n-1;i>=0;i--){
        while(s.length!=0 && arr[s[s.length-1]]<=arr[i]){
            s.pop();
        }
        if(s.length==0){
            a.push(0)
        }
        else{
            let temp = s[s.length-1]
            temp = temp-i;
            a.push(temp)
        }
        s.push(i)
    
    }
   a.reverse();
   for(let i=0;i<a.length;i++){
       str+=a[i]+" "
   }
   return str;
 
 }
 function runProgram(input)
 {
     input = input.split("\n")
     let t = +input[0];
     let j=1;
     for(let i=0;i<t;i++){
         let n = +input[j++]
         let arr = input[j++].split(' ').map(Number)
         console.log(findTemprature(n,arr))
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