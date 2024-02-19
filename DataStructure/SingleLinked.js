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

    this.head = !this.length ? n : this.head;
    this.tail = val;
    this.length += 1;
    return 
  }
}

const sinLinList = new SinglyLinkedList();

for (let i = 1; i < 6; i++) {
  sinLinList.push(i)
  console.log(sinLinList , sinLinList.head.next)
}
