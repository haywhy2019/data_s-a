//PUSHING PSEUDOCODE
//this function should accept a value;
//create a new node using the value passed to the function
//if there is no head property on the list, set the head and the tail
//to the newly created node
//otherwise set the next property on the tail to be the newly
//created node
//increment the length by 1
//return the linked list

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
        }else{
         this.tail.next = newNode;
        this.tail = newNode;
        }
        this.length++
        return this
    }

}

var list = new SinglyLinkedList()
list.push("hello");
list.push("goodbye")
