// function validateSeq( pushed, popped, len)
// {
     
//     var j = 0;
//     var st=[];
//     for(var i = 0; i < len; i++){
//         st.push(pushed[i]);
         
//         while (!st.length==0 && j < len &&
//         st[st.length-1] == popped[j])
//         {
//             st.pop();
//             j++;
//         }
//     }
     
//     return j == len;
// }
// function runProgram(input)
// {
//     input = input.split("\n")
//     let t=  +input[0];
//     let j=1;
//     for(let i=0;i<t;i++){
//         let len = +input[j];
//         j++;
//         let pushed = input[j].split(" ").map(Number)
//         j++;
//         let poped = input[j].split(" ").map(Number)
//         j++;
//        console.log( (validateSeq(pushed, poped, len)
//   ? "1" : "0"));
        
//     }
// }
// if (process.env.USERNAME === "") {
//      runProgram(``);
//  } else {
//      process.stdin.resume();
//      process.stdin.setEncoding("ascii");
//      let read = "";
//      process.stdin.on("data", function (input) {
//          read += input;
//      });
//      process.stdin.on("end", function () {
//          read = read.replace(/\n$/, "");
//          read = read.replace(/\n$/, "");
//          runProgram(read);
//      });
//      process.on("SIGINT", function () {
//          read = read.replace(/\n$/, "");
//          runProgram(read);
//          process.exit(0);
//      });
//  }