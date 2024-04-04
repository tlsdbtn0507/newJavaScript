class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp
    }
    return ++this.size
  }

  pop() {
    if (!this.first) return null;
    const temp = this.first;
    const { next } = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = next;
    }
    --this.size;
    return temp
  }
}
const stack = new Stack()
// console.log(stack.push('p'))
// // console.log(stack.push('1'))
// // console.log(stack.push('2'))
// // console.log(stack.push('3'))
// console.log(stack)
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack)