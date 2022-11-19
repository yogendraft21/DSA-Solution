
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
    let newNode = new LinkedListNode(data)
    if(head==null){
         head = new LinkedListNode(data)
         return head;
    }
    newNode.next = null;
    
    let last = head;
    while(last.next!=null)
        last = last.next;
    
    last.next  = newNode;
    return head;
    
}

