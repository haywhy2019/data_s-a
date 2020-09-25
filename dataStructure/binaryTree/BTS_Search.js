class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while (true) {
            if (value === current.value)
                return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    //FINDING A NODE IN A BST
    //starting at the root
    //         check if there is a root, if not- we are done searching;
    //         if it is greater
    //     check to see if there isa node to the right
    //     if there is move to that node and repeat these steps
    //     if ther is not, we are done searching
    //         if there is a root, check if the value of the new node is the value we are looking for
    //         if we found it, we are done
    //         if not check to see if the value is greater thann or less than the value of the root


find(val){
    if(this.root ==null){
        return false;
    } var current = this.root;
     var found = false;
     while(current && !found){
         if(value < current.val){
             current = current.left
         } else if(value > current.val){
             current = current.right;
         } else {
             found = true
         }
     }
    return false;
}

}

var tree = new BinarySearchTree();

tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
