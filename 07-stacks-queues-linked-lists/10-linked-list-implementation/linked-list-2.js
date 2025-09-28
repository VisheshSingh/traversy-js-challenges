class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = 0;
  }

  append(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  print() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.val + '-->';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }

  getAt(index) {
    let current = this.head;
    let i = 0;
    while (current) {
      if (i === index) {
        return current.val;
      }
      i++;
      current = current.next;
    }
    return null;
  }

  insertAt(index, val) {
    const newNode = new Node(val);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index - 1) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      count++;
      current = current.next;
    }
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let i = 0;
    while (current.next) {
      if (i === index - 1) {
        current.next = current.next.next;
        return;
      }
      i++;
      current = current.next;
    }
    return null;
  }
}

const ll = new LinkedList();
ll.append(10);
ll.append(20);
ll.append(30);
ll.append(40);
ll.print();
console.log(ll.getAt(2));
console.log(ll.getAt(5));
ll.insertAt(1, 25);
ll.print();
ll.removeAt(3);
ll.print();

module.exports = { Node, LinkedList };
