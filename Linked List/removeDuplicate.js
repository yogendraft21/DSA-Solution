const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

var deleteDuplicates = function(head) {
   let cur = head;
   while(cur!=null){
       let temp = cur;
       while(temp!=null && temp.data==cur.data){
           temp = temp.next;
       }
       cur.next = temp;
       cur = cur.next;
   }
   return head;
};
// O(n)
// var deleteDuplicates = function(head) {
//   var to_free;
  
//         if (head == null)
//             return null;
  
//         if (head.next != null) {
//             if (head.data == head.next.data) {
  
//                 to_free = head.next;
//                 head.next = head.next.next;
//                 deleteDuplicates(head);
//             }
//             else {
//                 deleteDuplicates(head.next);
//             }
//         }
//         return head;
// };