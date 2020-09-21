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

    //PUSH PSEUDOCODE
    //     create a new node with the value passed to the
    //     function
    //     if the headproperty is null set the head and the tail to be
    //     the newly created node
    //     if not,set the next property on the tail to be that node
    //     to be the tail
    //     set the tail to be the newly created node
    //     increment the length
    //     return the doubly linked list

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

}

var list = new DoublyLinkedList();

list.push(200)
list.push(10)
list.push(30)