class BinaryHeap {
    constructor(data) {
        this.data = data;
        this.size = data.length;

        this.heapify();
    }

    heapify() {
        if(this.data && (this.data instanceof Array)) {
            for(let i = Math.floor((this.size - 1) / 2); i >= 0; i--) {
                this.bubbleDown(i, this.data[i]);
            }
        }
    }

    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    bubbleUp(childIndex, childData) {
        if(childIndex > 0) {
            
            const parentIndex = this.getParentIndex(childIndex);
            const parentData = this.data[parentIndex];

            if(childData < parentData) {
                this.data[parentIndex] = childData;
                this.data[childIndex] = parentData;

                this.bubbleUp(parentIndex, childData);
            }
        }
        
    }

    insert(newItem) {
        if(newItem) {
            this.data.push(newItem);
            this.bubbleUp(this.data.length - 1, newItem);
        }
    }

    deleteMin() {
        const head = this.data[0];
        const tail = this.data.pop();

        if(this.data.length) {
            this.data[0] = tail;
            this.bubbleDown(0, tail);
        }
    }

    bubbleDown(parentIndex, parentData) {
        const leftChildIndex = this.getLeftChildIndex(parentIndex);
        const rightChildIndex = this.getRightChildIndex(parentIndex);
        const leftChildData = this.data[this.getLeftChildIndex(parentIndex)];
        const rightChildData = this.data[this.getRightChildIndex(parentIndex)];
                
        if(leftChildData < rightChildData) {
            if(parentData < leftChildData) {
                this.data[leftChildIndex] = parentData;
                this.data[parentIndex] = leftChildData;

                this.bubbleDown(leftChildIndex, parentData);
            }
            
        } else if(rightChildData < leftChildData) {
            if(parentData < rightChildData) {
                this.data[rightChildIndex] = parentData;
                this.data[parentIndex] = rightChildData;

                this.bubbleDown(rightChildIndex, parentData);
            }
        }
    }
}

module.exports = BinaryHeap;