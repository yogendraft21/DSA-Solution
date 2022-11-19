
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function insertNodeAtHead(head, data) {
      let new_node = new LinkedListNode(data)
      new_node.next = head;
      head = new_node;
      
      return head;
}

