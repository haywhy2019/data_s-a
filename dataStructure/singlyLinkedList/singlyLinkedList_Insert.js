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
      
 set(index, val){
     var found = this.get(index)
    if(found){
        found.val = val;
        return true
    }
    return false;
 }
 //INSERT PSEUDOCODE
 //if the index is less than zero or greater than the length, return
//  false
//  if the index is the same length, push a new node to the 
//  end of the list
//  if the index is 0, unshift a new node to the start of the list
//  otherwise, using the get method, access the node at the index -1
//  set the next property on that node to be the new node
//  set the next property o the new node to be the previous next
//  increment the length
//  return true

insert(index, val){
    
    if(index < 0 || index > this.length){
        return false}
    if(index == this.length){
      !!this.push(val)
    }
    if(index == 0){
      !!this.unshift(val)
    }else{
        var newNode = new Node(val)
    var prev = this.get(index-1)
    var temp = prev.next;
    prev.next - newNode;
        newNode.next = temp;
        this.length = temp;
        this.length++
        return true ;    
    }
}

}

var list = new SinglyLinkedList();
list.push("hello");
list.push("dear");
list.push("cat");
