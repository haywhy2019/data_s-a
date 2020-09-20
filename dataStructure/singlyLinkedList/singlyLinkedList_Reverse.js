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

    pop() {
        if (!this.head)
            return undefined;
        var current = this.head
        var newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null;
        this.length--;
        if (this.lenght == 0) {
            this.head = null;
            this.tail = null;
        }
        return current

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

    set(index, val) {
        var found = this.get(index)
        if (found) {
            found.val = val;
            return true
        }
        return false;
    }

    insert(index, val) {

        if (index < 0 || index > this.length) {
            return false
        }
        if (index == this.length) {
            !!this.push(val)
        }
        if (index == 0) {
            !!this.unshift(val)
        } else {
            var newNode = new Node(val)
            var prev = this.get(index - 1)
            var temp = prev.next;
            prev.next - newNode;
            newNode.next = temp;
            this.length = temp;
            this.length++
            return true;
        }
    }

    remove(index) {
        if (index < 0 || index > this.length) {
            return undefined
        }
        if (index == this.length - 1) {
            this.pop(index)
        }
        if (index == 0) {
            this.shift(index)
        } else {
            var prev = this.get(index - 1)
            var removed = prev.next
            prev.next = removed.next;
            this.length--
            return removed;

        }
    }
    //REVERSE PSEUDOCODE
    // swap the head and the tail
    // create a variable called next
    // create a varaible called prev
    // create a variable called node and initiate it to the head property
    // loop through the list
    // set next to be the next property on whaever node is
    //set the next property on the node to be whatever the prev is
    //set prev to be the value of the node variable
    //set the node variable to be the value of the next variable

  

    reverse() {
        var node = this.head;
        this.head = this.tail
        this.tail = node;
        var next;
        var prev = null;
        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next
        }
        return this

    }

      print() {
        var arr = []
        var current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }

}

var list = new SinglyLinkedList();
list.push(5000);
list.push(511);
list.push(522);
list.push(5333);
