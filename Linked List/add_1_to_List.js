
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var addOneToLinkedList = function(head) {
     head = reverse(head); 
    head = addOneUtil(head); 
    return reverse(head); 
};
function newNode(data) 
{ 
    var new_node = new LinkedListNode(); 
    new_node.data = data; 
    new_node.next = null; 
    return new_node; 
} 
  

function reverse(head) 
{ 
    var prev = null; 
    var current = head; 
    var next; 
    while (current != null) 
    { 
        next = current.next; 
        current.next = prev; 
        prev = current; 
        current = next; 
    } 
    return prev; 
} 
  

function addOneUtil(head) 
{ 
   
    var res = head; 
    var temp, prev = null; 
  
    var carry = 1, sum; 
  
    while (head != null) //while both lists exist 
    { 
       
        sum = carry + head.data; 
        carry = (sum >= 10)? 1 : 0; 
  
        
        sum = sum % 10; 
        head.data = sum; 
  

        temp = head; 
        head = head.next; 
    } 
  
    if (carry > 0) 
        temp.next = newNode(carry); 
  

    return res; 
}
