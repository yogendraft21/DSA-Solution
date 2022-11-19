const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
    var arr=[];
    var current=head;
    while(current !=null){
        var x=current.data;
        arr.push(x);
        current=current.next;
    }
    //console.log(arr)
    var flag=true;
    var i=0;
    var j=arr.length-1;
    while(i<j){
        if(arr[i]!=arr[j]){
            return false;
            break;
        }
        i++;
        j--;
    }
    return flag;
};
