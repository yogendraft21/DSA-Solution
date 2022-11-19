
const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var mergeTwoLists = function(l1, l2) {
    var node = new ListNode();
    var current =node;
    // console.log(l1.val)
    while(l1!=null && l2!=null){
        if(l1.val < l2.val){
        current.next = l1;
        l1 = l1.next;
        }
        else{
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    if(l1!=null){
        current.next = l1;
    }
    if(l2!=null){
        current.next = l2;
    }
    return node.next;
};

