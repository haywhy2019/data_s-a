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
    //POPPING PSEUDOCODE
    //     if there is no head, return undefined
    //     store the current tail in a variable to return later
    //     if the length is 1, set the head and tail to be null
    //     update the tail to be the previous node
    //     set the newtail next to null
    //     decrement the length
    //     return the value removed

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

}

var list = new DoublyLinkedList();

list.push(200)
list.push(10)
list.push(30)
