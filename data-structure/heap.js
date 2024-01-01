class Heap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildindex(index) {
    return index * 2 + 1;
  }
  rightChildindex(index) {
    return (index + 1) * 2;
  }

  parent(index) {
    return this.heap[this.parentIndex(index)];
  }

  leftChild(index) {
    return this.heap[this.leftChild(index)];
  }
  rightChild(index) {
    return this.heap[this.rightChild(index)];
  }

  peek() {
    return this.heap[0];
  }
}