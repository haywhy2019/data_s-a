//PSEUDOCODE
//write a min binary heap lower number means higher priority
// each node has a val and a priority. use the priority to build the heap
// enqueue method accepts a value and a priority
// make a new node and puts it in the right spot
// based off of its priority
// dequeue method removes root element, returns it and 
// rearranegs heap using priority.



class PriorityQueue {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }
    enqueue(val, priority) {
        let newNode = new Node(val,priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority <= parent.priority)
                break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx
        }

    }


    dequeue() {
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
             this.values[0] = end;
        this.sinkDown()
        }
       
        return max;

    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority > element.priority) {
                    swap = leftChildIdx
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild.priority > element.priority) || (swap !== null && rightChild.priority > leftChild.priority)) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null)
                break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;

        }
    }

}

class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 1);
ER.enqueue("gun shot woun", 5);
ER.enqueue("high fever", 2);