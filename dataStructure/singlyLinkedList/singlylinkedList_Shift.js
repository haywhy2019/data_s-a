    

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

    //SHIFT PSEUDOCODE
    //if there are no nodes, return undefined
    //store the current head property to be the current heads next
    //property
    //decrement the length by 1
    //return the value of the node removed

    shift(){
        if(!this.head) return undefined;
         var currentHead = this.head
       var newHead = currentHead.next;
       this.head = newHead
        this.length--
        if(this.llength == 0){
            this.tail = null   
        }
        return currentHead
    }

}

var list = new SinglyLinkedList()
list.push("hello");
list.push("goodbye")
list.push("test")

