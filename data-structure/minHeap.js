class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [
          this.heap[index2],
          this.heap[index1],
        ];
    }

    add(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    poll() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const value = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return value;
    }

    bubbleUp() {
        let index = this.heap.length -1;
        let parentIndex = Math.floor((index - 1) / 2);
        while(this.heap[parentIndex] && this.heap[index][1] < this.heap[parentIndex][1]) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((index-1)/2)
        }
    }

    bubbleDown() {}
}