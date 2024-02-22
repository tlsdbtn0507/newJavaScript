class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
  push(val) {
    
    const n = new Node(val)

    if (!this.length) {
      this.head = n;
      this.tail = this.head;
    } else {
      this.tail.next = n;
      this.tail = n
    }
    this.length += 1;
    return this
  }

  pop() {
    // console.log(1)
    
    if (!this.length) return
    
    this.tail = null;

    // console.log(this.head)
    if (this.head.next) {
      console.log(this.head.next.next)
      // this.head.pop()
    }

    return this
  }

}

const sinLinList = new SinglyLinkedList();

for (let i = 1; i < 6; i++) {
  sinLinList.push(i)
  // console.log(sinLinList)
}
// sinLinList.push(1)
sinLinList.pop();
// console.log(sinLinList)
// console.log('pop', sinLinList.pop())

