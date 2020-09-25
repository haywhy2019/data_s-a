// queues are FIFO - first in first out
// new nodes are added to the tall and removed from the head 
//think of a physical queues

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        var newNode = new Node(val)
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }


//Dequeue pseudocode
//if there is no first property just return null;
// store the first property in a variable
// see if the first is the same as the last(check if there is
// only 1 node). if so, set the first and last to be null
// if there is more than 1 node, set the first property to
// be the next property of first
// decrement the size by 1
// return the value of the node dequeue
    dequeue() {
        if(!this.first){
            return null
        }
        var temp = this.first;
        if(this.first == this.last){
            this.last = null
        }
        this.first = temp.next
        temp.next = null
        this.size--;
         return temp.val;
    }
   
}

var queue = new Queue()