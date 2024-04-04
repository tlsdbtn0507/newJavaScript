class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue{
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enque(val) {
    const newNode = new Node(val)
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size
  }
  deque() {
    const temp = this.first;
    if (!this.size) return null;
    if (this.first === this.last) return temp;
    this.first = this.first.next;
    this.size--;
    return temp.value
  }
}

const q = new Queue();
console.log(q.enque('1'))
console.log(q.enque('2'))
console.log(q.enque('3'))
console.log(q.deque())
console.log(q)