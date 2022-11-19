const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var checkWavePattern = function (head) {
    
     let temp = head
     let turn =0;
     if(temp.data<temp.next.data){
         turn=1;
     }else{
         turn=2;
     }
     while(temp.next!=null){
         if(turn==1 && temp.data<temp.next.data){
             temp = temp.next
             turn=2;
         }else if(turn==2 && temp.data>temp.next.data){
             temp=temp.next;
             turn=1;
         }else{
             return false;
         }
     }
     return true;
};


