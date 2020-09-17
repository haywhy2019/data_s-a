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
        if (!this.head)
           { return undefined};
        var currentHead = this.head
        var newHead = currentHead.next;
        this.head = newHead
        this.length--
        if (this.llength == 0) {
            this.tail = null
        }
        return currentHead
    }
    //UNSHIFTING PSEUDOCODE

    //this function should accept a value
    //create a new node using the value passes to the function
    //if there is no head property on thenlist, set the head and
    //tail to be the newly created node
    //otherwise set the newly created node's next property to
    //be the current heaad property on the list
    //set the head property on the list to be that newly creatd
    //node
    //increment the length of the list by 1
    //return the linked list

    unshift(val) {
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head  ;
        }else {
               var currentHead = this.head;
        newNode.next = currentHead;
        this.head = newNode
        }
     
        this.length++
        return this;

    }

}

var list = new SinglyLinkedList()
