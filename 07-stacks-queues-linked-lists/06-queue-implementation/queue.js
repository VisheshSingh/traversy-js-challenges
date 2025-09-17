class Queue {
  constructor() {
    this.queue = [];
    this.maxSize = 100;
    this.head = 0;
    this.tail = 0;
  }

  enqueue(val) {
    if (this.isFull()) {
      return false;
    }
    this.queue[this.tail] = val;
    this.tail++;
    return true;
  }

  isFull() {
    return this.getLength() === this.maxSize;
  }

  getLength() {
    return this.tail - this.head;
  }

  isEmpty() {
    return this.getLength() === 0;
  }

  dequeue() {
    const val = this.queue[this.head];
    this.head++;
    return val;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[this.head];
  }
}

module.exports = Queue;
