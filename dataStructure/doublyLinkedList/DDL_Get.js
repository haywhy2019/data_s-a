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
    //GET PSEUDOCODE
    // if the index is less than 0 or greater or equal to the length, return
    // null
    // if the index is less than or equal to half the length of the list
    //     loop through the list starting from the head and loop
    //     towards the middle
    //     return the node once it is found
    // if the index is greater than half the length of the list
    //     loop through the list starting from the tail and loop towards
    //     th middle
    //     return the node once it is found


    get(index) {
        if (index < 0 || index >= this.length)
        {  return null}
        if(index <= this.length/2){
            var count = 0;
            var current = this.head;
            while( index !== count){
                current = current.next;
                count++
            }
            return current;
        } else{
            var count = this.length - 1;
            var current = this.tail;
            while(count !== count){
                current = current.prev;
                count--;
            }
            return current

        }

    }


}

var list = new DoublyLinkedList();

list.push(200)
list.push(10)
list.push(30)
