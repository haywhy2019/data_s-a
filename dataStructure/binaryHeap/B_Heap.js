//INSEERT PSEUDOCODE
//Push the value into the values property on the heap
//bubbles the value up to its correct spot
//BUBBLE U1
//create a variable called index which is the length of the
//value property -1
//create a variable called parentindex which is the floor
// of (index-1)/2
//keep looping as long as the value element at the parentindex
//is less than the values element as the child
//index
//swap the value of the values element at the 
//parentindex with the value 
//of the element of the element property
//at the child index
//set the index to be the parentindex, and start over;

//    to get the parent node Math.floor((n-1)/2)
//    to get the child node on the left  (n+1)2
//    to get the child node on the right (n-1)2

class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent)
                break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx
        }

    }

    //REMOVING(MAXEXTRACT)
    //swap the value in the values property with the last one
    //pop from the values property, so you can return thw values at the end
    //     have the new root sind-down to the correct spot...
    //         your parent index starts at 0 (the root)
    //         find the index of the right child: 2* index + 1(make sure its not out of bounds)
    //         find the index of the right child: 2* index +2(make its out of bounds);
    //         if the left or right child is greater than the element ....swap. if both left and 
    //         right children are larger, swap witht the largest child.
    //         the child index you swapped to now becomes the new parent index.
    //         keep looping and swapping until neither child is larger than the element.
    //         return the old root.

    extractMax() {
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
                if (leftChild > element) {
                    swap = leftChildIdx
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
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

let heap = new MaxBinaryHeap();
heap.insert(55)
