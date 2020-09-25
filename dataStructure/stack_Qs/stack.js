//stacks are a LIFO structure-last in first out
//think of a pile of books on the table
//a stack of cards or plates

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //PUSHING PSEUDOCODE
//   function should acept a value
//   create a new node with that value
//   if there are no nodes in the stack, set the first and last
//   property to be the newly created node
//   if there is at least one node create a variable that stores
//   the current first property on stack
//   reset the first property to be the newly created nodeset the next property on the node to be the previously
//   created variable 
//   increment the size of the stack by 1

    push(val) {
        var newNode = new Node(val)
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp
        }
        return ++this.size;
    }
    //POP PSEUDOCODE
    //     if there are no nodes in teh stack return null
    //     create temporary variable to store the first property onthe stack
    //     if there is only 1 node set the first and the last property to be
    //     null
    //     if there is more than one node set the first property to be
    //     the next property on the current first
    //     decrement the sizeof the node removed 
    //     return the value by 1

    pop() {
        if (!this.first) {
            return null;
        }
        var temp = this.first;
        if (this.first == this.last) {
            this.last = null
        }
        this.first = this.first.next;
        this.size--;
        return temp.val
    }
}

var stack = new Stack();
