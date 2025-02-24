class Node{
    constructor(val){
         this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(val){
        const newNode = new Node(val)
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
       }

push(val){
    const newNode = new Node(val);
    if(!this.head){
        this.head = newNode;
        this.tail = this.head;
        this.length++;
        return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length ++;
    return this;
}
insert(index,val){
    const newNode = new Node(val);
    if(index>=this.length || index<0) return undefined
    let temp = this.head;
    let pre = temp;
    for(let i = 0;i<index;i++){
        pre = temp
        temp = temp.next;
    }
    pre.next = newNode;
    temp = pre.next;
    return temp;
}
get(index){
    const newNode = new Node(index);
    let val = this.head;
    if(index<0 || index>=this.length){return undefined;}
    for(let i = 0;i< index;i++){
        val = val.next;
    }
    return val;
}
}

let first = new SinglyLinkedList(10);

first.push(12);
first.push(13);
first.push(14);
first.push(15);
first.push(16);
first.push(17);
first.insert(2,72);
console.log(first.get(2));
console.log(first);


// Node { val: 72, next: null }
// SinglyLinkedList {
//   head: Node { val: 10, next: Node { val: 12, next: [Node] } },
//   tail: Node { val: 17, next: null },
//   length: 7
// }