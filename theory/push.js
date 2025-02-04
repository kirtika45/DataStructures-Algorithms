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

    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;

        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }
    }
}

let first = new SinglyLinkedList(20);
first.push(25);
first.push(30);
console.log(first);


// SinglyLinkedList {
//     head: Node { val: 20, next: Node { val: 25, next: [Node] } },
//     tail: Node { val: 30, next: null },
//     length: 3
//   }