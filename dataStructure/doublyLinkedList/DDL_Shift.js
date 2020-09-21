class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this

    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        var poppedNode = this.tail
        if (this.length === 1) {
            this.head = null;
            this.tail == null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--
        return poppedNode
    }
     //SHIFTING PSEUDOCODE
//      if the length is 0 return undefined
//      store the current head property in a variable(old head)
//      if the length is one
//         set the head to be null
//         set the tail to be one
//      update the head to be the next of the old head
//      set the heads prev property to null
//      set the old head next to null
//      decrement the length
//      return old head

shift(){
    if(!this.head){
        return undefined
    }
    var oldHead = this.head;
    if(this.length === 1){
        this.head = null
        this.tail = null
    } else {
        this.head = oldHead.next;
         this.head.prev = null;
         oldHead.next = null;
    }
        
    this.length--;
    return oldHead;
}

}

var list = new DoublyLinkedList();

list.push(200)
list.push(10)
list.push(30)
