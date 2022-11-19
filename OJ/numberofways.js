function runProgram(input) {
    var N = +input;
    solve(N);

}
function solve(N) {
    function NumberOfWays(N) {
        if (N == 0) {
            return 1;
        }
        if (N < 0) {
            return 0;
        }
        if (N > 0) {
            return NumberOfWays(N - 1) + NumberOfWays(N - 2) + NumberOfWays(N - 3);
        }
    }

    console.log(NumberOfWays(N));
}


if (process.env.USER === "") {
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