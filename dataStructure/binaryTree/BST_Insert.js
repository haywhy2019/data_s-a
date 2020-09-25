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

    //INSERTING A NODE
    //     steps-iteratively or recusively
    //     create a node
    //     starting at the root
    //         check if there is a root,if not-the root now becomes the new node
    //         if there is a root,check if the value of the new node is greater than or
    //         less than the value of the root
    //         if it is greater than
    //             check to see if there is a node to the right
    //             if there is not add that node as the right property
    //         if it is less
    //             check to see if there is a node to the left
    //             if there is move to that node and repeat these steps
    //             if there is not add that node as the left property

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
}


var tree = new BinarySearchTree();

tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)