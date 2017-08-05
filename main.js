const binaryHeap = require('./binary-heap');

let data = [6,12,4,5,3,8,7];

let minHeap = new binaryHeap(data);

console.log(minHeap);

minHeap.insert(1);

console.log(minHeap);
console.log(minHeap);

minHeap.deleteMin();

console.log(minHeap);

minHeap.insert(12);

console.log(minHeap);