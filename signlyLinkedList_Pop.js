

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
//PUSHING PSEUDOCODE
//this function should accept a value;
//create a new node using the value passed to the function
//if there is no head property on the list, set the head and the tail
//to the newly created node
//otherwise set the next property on the tail to be the newly
//created node
//increment the length by 1
//return the linked list
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
  //POP PSEUDOCODE
  //if there are no  ode in the list, return undefined
  //loop through the list untill you reach the tail
  //set the next property of the 2nd ti the last node to be null
  //set the tail to be the 2nd to the last node
  //devrement the length of the list by 1
  //return the value of the node removed

  pop(){
      if(!this.head) return undefined;
     var current = this.head
     var newTail = current;

      while(current.next){
          newTail = current; 
        current = current.next
      }
      this.tail= newTail
      this.tail.next = null;
      this.length--;
      if(this.lenght == 0){
          this.head = null;
          this.tail = null;
      }
      return current


  }
}

var list = new SinglyLinkedList()
list.push("hello");
list.push("goodbye")
