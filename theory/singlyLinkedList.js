class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(val){
        const newNode = new Node(val);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    }


let first = new SinglyLinkedList(20);
console.log(first);


// SinglyLinkedList {
//     head: Node { val: 20, next: null },
//     tail: Node { val: 20, next: null },
//     length: 1
//   }