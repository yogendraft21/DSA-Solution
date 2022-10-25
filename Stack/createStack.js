let arr=[]

let n = 5;
let top=-1;
for(let i=0;i<n;i++){
    arr.push(-1);
}

push(5);
push(10);
push(20);
push(30);
push(40);
pop();
peak();
pop();
peak();



function push(data){
    if(top==arr.length-1){
        console.log("overflow")
        return;
    }
    top++;
    arr[top] = data;
    console.log(arr)
    return;
}
function pop(){
    if(top==-1){
        console.log("underflow")
        return;
    }
    console.log("popped element",arr[top]);
    top--;
    return;
}
function peak(){
    if(top==-1){
        console.log("underflow")
        return;
    }
    console.log(arr[top])
    return;
}