class BinaryHeap {
    constructor(data) {
        this.data = data;
        this.size = data.length;
    }

    heapify = () => {
        if(this.data && (this.data instanceof Array)) {
            for(let i = Math.floor((this.size - 1) / 2); i >= 0; i--) {

            }
        }
    }

    getLeftChild = (parentIndex) => {
        return 2 * parentIndex + 1;
    }

    getRightChild = (parentIndex) => {
        return 2 * parentIndex + 2;
    }

    getParent = (childIndex) => {
        return Math.floor((childIndex - 1) / 2);
    }
}