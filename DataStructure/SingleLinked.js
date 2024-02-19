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

    if (this.length) {
      this.tail = n;
      n.next = n
    } else {
      this.head = n
    }  

  
      this.length += 1;
    }
}

const sinLinList = new SinglyLinkedList();

// for (let i = 1; i < 6; i++) {
//   sinLinList.push(i)
//   console.log(sinLinList)
// }
sinLinList.push(1)
sinLinList.push(2)
console.log(sinLinList)