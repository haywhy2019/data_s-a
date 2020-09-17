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
      

    //SET PSEUDOCODE
    //this function should accept a value and an index
//     use your get function to find the specific node
//     if the node is not foun, return false
//     if the node is found, set the value of that node to be the
//     value passed to the unction and return true

 set(index, val){
     var found = this.get(index)
    if(found){
        found.val = val;
        return true
    }
    return false;
 }

}

var list = new SinglyLinkedList();
list.push("hello");
list.push("dear");
list.push("cat");
