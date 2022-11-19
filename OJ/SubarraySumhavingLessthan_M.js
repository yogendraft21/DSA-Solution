function solve(arr, k) {
    let left = 0;
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        while (sum >= k) {
            sum -= arr[left];
            left++;
        }

        count += i - left + 1;
    }

    return count;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let [, k] = newInput[i].trim().split(" ").map(Number);
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        console.log(solve(arr, k));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
    5 5
    1 5 1 3 2`);
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