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

    shift() {
        if (!this.head) {
            return undefined
        }
        var oldHead = this.head;
        if (this.length === 1) {
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

    unshift(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            var currentHead = this.head;
            this.head = newNode;
            this.head.next = currentHead;
            currentHead.prev = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null
        }
        if (index <= this.length / 2) {
            var count = 0;
            var current = this.head;
            while (index !== count) {
                current = current.next;
                count++
            }
            return current;
        } else {
            var count = this.length - 1;
            var current = this.tail;
            while (count !== count) {
                current = current.prev;
                count--;
            }
            return current

        }

    }
    //INSERT PSEUDOCODE
    // if the length is less than zero orr greater than or equal to the
    // length return false
    // if the index is 0, unshift
    // if the index is the same as the length, push
    // use the get method to access the index-1
    // set the next and the prev propeerties on the correct nodes to link
    // everything together
    // increment the length
    // return true

    insert(index, val) {
        var newNode = new Node(val)
        if (index < 0 || index >= this.length) {
            return false
        }
        if (index == 0) {
            !!this.unshift(val)
        }
        if (index == this.length) {
            !!this.push(val)
        } else {
            var current = this.get(index - 1)
            var temp = current.next;
            current.next = newNode;
            newNode.prev = current;
            newNode.next = temp
            temp.prev = newNode
            this.length++;
            return true;
        }

    }

}

var list = new DoublyLinkedList();

list.push(200)
list.push(10)
list.push(30)
