var flag1 = false, flag2 = false, flag3 = false, flag4 = false;
var master = [], queue1 = [], queue2 = [], queue3 = [], queue4 = [];

function enqueue(queue, element) {
    queue.push(element);
}

function dequeue(queue) {
    return queue.shift();
}

function isEmpty(queue) {
    return queue.length > 0 ? false : true;
}


function masaiCompi(operation, clubNumber, rollNumber) {
  

    switch (operation) {
        case 'E':
            if (clubNumber == 1) {
                if (flag1 == false) {
                    enqueue(master, clubNumber);
                    enqueue(queue1, rollNumber);
                    flag1 = true;
                } else {
                    enqueue(queue1, rollNumber);
                }
            } else if (clubNumber == 2) {
                if (flag2 == false) {
                    enqueue(master, clubNumber);
                    enqueue(queue2, rollNumber);
                    flag2 = true;
                } else {
                    enqueue(queue2, rollNumber);
                }
            } else if (clubNumber == 3) {
                if (flag3 == false) {
                    enqueue(master, clubNumber);
                    enqueue(queue3, rollNumber);
                    flag3 = true;
                } else {
                    enqueue(queue3, rollNumber);
                }
            } else if (clubNumber == 4) {
                if (flag4 == false) {
                    enqueue(master, clubNumber);
                    enqueue(queue4, rollNumber);
                    flag4 = true;
                } else {
                    enqueue(queue4, rollNumber);
                }
            }
            break;
        case 'D': // Delete form queue
            let string = "";
            if (master[0] == 1) {
                if(!isEmpty(queue1)){
                    string += master[0] + " " + dequeue(queue1);
                }
               if(isEmpty(queue1)){
                    dequeue(master);
                    flag1 = false;
                }
                console.log(string);
            } else if (master[0] == 2) {
                if(!isEmpty(queue2)){
                    string += master[0] + " " + dequeue(queue2);
                }
                if(isEmpty(queue2)){
                    dequeue(master);
                    flag2 = false;
                }
                console.log(string);
            } else if (master[0] == 3) {
                if(!isEmpty(queue3)){
                    string += master[0] + " " + dequeue(queue3);
                }
                if(isEmpty(queue3)){
                    dequeue(master);
                    flag3 = false;
                }
                console.log(string);
            } else if (master[0] == 4) {
                if(!isEmpty(queue4)){
                    string += master[0] + " " + dequeue(queue4);
                }
                if(isEmpty(queue4)){
                    dequeue(master);
                    flag4 = false;
                }
                console.log(string);
            }

            break;

    }

}



function runProgram(input) {

    input = input.trim().split('\n');
    var line = 0;
    for (let i = 0; i < +input[0]; i++) {
        var [operation, element1, element2] = input[++line].trim().split(' ');
        masaiCompi(operation, element1, element2);
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