class BinaryHeap {
    constructor(data) {
        this.data = data;
        this.size = data.length;
    }

    heapify() {
        if(this.data && (this.data instanceof Array)) {
            for(let i = Math.floor((this.size - 1) / 2); i >= 0; i--) {

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
}