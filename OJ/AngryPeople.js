function doit(input) {
    let lines = input.split('\n')
    let n = parseInt(lines[0])
    let arr = lines[1].trim().split(' ').map(Number)
    
    arr.sort((a, b) => b - a)
    
    let l = arr[0]
    let r = arr[0]
    
    let ans = 0
    
    let turn = 1
    
    for (let i = 1;i < n;i++) {
        if (turn == 1) {
            ans = Math.max(ans, Math.abs(l - arr[i]))
            l = arr[i]
        } else {
            ans = Math.max(ans, Math.abs(r - arr[i]))
            r = arr[i]
        }
        turn *= -1
    }
    ans = Math.max(ans, Math.abs(l - r))
    
    console.log(ans)
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    
    doit(read)
});