class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this
    }

    shift() {
        if (!this.head) {
            return undefined
        }
        ;var currentHead = this.head
        var newHead = currentHead.next;
        this.head = newHead
        this.length--
        if (this.llength == 0) {
            this.tail = null
        }
        return currentHead
    }

    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            var currentHead = this.head;
            newNode.next = currentHead;
            this.head = newNode
        }

        this.length++
        return this;

    }

    //GET PSEUDOCODE
    //this function should accept an index
    //if the index is less than zero or greater than or equal to
    //     the length of the list, return null
    //     loop through the list until you reach the index and
    //     return the node at that specific index

    get(index) {
        if (index < 0 || index > this.length) {
            return null
        }
        var counter = 0;
        var current = this.head
        while (counter !== index) {

            current = current.next
            counter++;
        }
        return current
    }

}

var list = new SinglyLinkedList();
list.push("hello");
list.push("dear");
list.push("cat");
