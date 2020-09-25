//BREATH FIRST SEARCH
//DEAPTH FIRST SEARCH

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

//     DFS - PREORDER
//     STEPS - RECUSIVELY
//   create a variable to store the values of nodes visited;
//   store the root of the BST in a variable called current
//   write a helper function which accepts a nodes 
//     push the value of the node to the variable the stores
//     the values
//     if the node has a left property, call the helper function
//     with the left property on the node
//     if the node has a right property call the helper function
//     with the right property on the node;
//invoke the helper function with the current variable 
// return the array of values

 DFSPreOrder(){
      var data = [];
      var current = this.root;
      function traverse(node){
          data.push(node.value)
          if(node.left) traverse(node.left);
          if(node.right) traverse(node.right)
      }
      traverse(current)
      return data;
 }

}

//              10
//            6          15
//          3  8            20


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();




