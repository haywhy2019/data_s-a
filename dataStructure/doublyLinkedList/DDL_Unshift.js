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
//UNSHIFT PSEUDOCODE
// create a new node with the value passed to the function
// if the length is 0
//     set the head to be the new node
//     set the tail to be the new node
//  otherwise
//     set the prev property on the head of the list to be the
//     head property
//     update the head to be the new node
//  increment the length
//return the list

unshift(val){
    var newNode = new Node(val)
    if(!this.head){
        this.head = newNode;
        this.tail = newNode;  
    }else {
        var currentHead = this.head;
        this.head = newNode;
        this.head.next = currentHead;
        currentHead.prev = newNode
    }
    this.length++
    return this
}

}

var list = new DoublyLinkedList();

list.push(200)
list.push(10)
list.push(30)
