class MaxHeap {
  constructor() {
    this.heap = [];
  }

  buildHeap(array) {
    this.heap = array;
    for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
      this.shiftDown(i);
    }
  }

  shiftDown(currentIndex) {
    let endIdx = this.heap.length - 1;
    let leftIdx = this.leftChild(currentIndex);
    while (leftIdx <= endIdx) {
      let rightIdx = this.rightChild(currentIndex);
      let idxToShift;
      if (rightIdx <= endIdx && this.heap[rightIdx] > this.heap[leftIdx]) {
        idxToShift = rightIdx;
      } else {
        idxToShift = leftIdx;
      }
      if (this.heap[currentIndex] < this.heap[idxToShift]) {
        this.swap(currentIndex, idxToShift);
        currentIndex = idxToShift;
        leftIdx = this.leftChild(currentIndex);
      } else {
        return;
      }
    }
  }

  shiftUp(currentIndex) {
    let parentIndex = this.parent(currentIndex);
    while (currentIndex > 0 && this.heap[parentIndex] < this.heap[currentIndex]) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(currentIndex);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0, this.heap.length - 1);
    this.heap.pop();
    this.shiftDown(0);
  }

  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChild(i) {
    return i * 2 + 1;
  }

  rightChild(i) {
    return i * 2 + 2;
  }

  display() {
    console.log(this.heap);
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

let array = [6, 2, 8];
let heap = new MaxHeap();
heap.insert(9);
heap.buildHeap(array);
heap.display();
