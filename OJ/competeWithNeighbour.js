function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var array = input_arr[1].split(" ")
    var count = 0
    for(var i = 0 ; i < array.length; i++)
    {
        array[i] = Number(array[i])
    }
    if(array[0] > array[1])
    {
        count += 1;
    }
    if(array[array.length-1] > array[array.length-2])
    {
        count += 1;
    }
    for(var i = 0 ; i < array.length; i++)
    {
        if(array[i] > array[i+1] && array[i] > array[i-1])
        {
            count += 1;
        }
    }
    console.log(count)
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});