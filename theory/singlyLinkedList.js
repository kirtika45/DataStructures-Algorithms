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
    pop(){
        if(!this.head) return undefined
        let temp = this.head;
        let pre = this.head;
        while(temp.next){
            pre = temp;
            temp = temp.next;

        }
        
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        
        if (this.length==0){
            this.head = null;
            this.tail = null;
        }



        return temp;
    }

    unshift(val){
        const newNode = new Node(val)
        if(this.head == null) {
            return undefined;
        }
        else{
        newNode.next = this.head
        this.head = newNode
        this.length++

        return this
        }


    }
    shift(){
        let temp = this.head;
        if(!this.head) return undefined
        this.head = temp.next;
        temp.next = null;

        if(this.length==0){
            this.head = null;
            this.tail = null;

        }
        this.length--;
        return this;
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

    set(index,val){
       let temp =this.get(index);
       if(temp){
        temp.val = val;
        return true;
       }
       return false;

    }
    remove(index,val){
        if(index===0) return this.shift(val);
        if(index===this.length-1)return this.pop(val);
        if(index<0|| index>=this.length) return false;
        const temp = this.get(index-1);
        const pre = temp.next;
        pre.next  = temp.next;
        temp.next = null;
        this.length--;

        return this;
    }
    reverse(){
        let temp = this.head
        this.head  = this.tail
        this.tail = temp
        let prev = null
        let next = temp.next
        for(let i = 0;i<this.length;i++){
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
        return this.head
    }

    }


let first = new SinglyLinkedList(20);
first.push(20);
first.push(25);
first.push(30);
// first.pop()
first.push(30);
first.pop();
first.pop();
// first.pop();
// first.pop();
// first.pop();
first.pop();
// console.log(first);

first.unshift(12);
console.log(first);
first.shift();
first.push(350);
first.push(45);
first.get(2);
console.log(first.get(2));
console.log(first.set(2,5));
console.log(first.remove(2,5));
console.log(first);




// SinglyLinkedList {
//   head: Node { val: 12, next: Node { val: 20, next: [Node] } },
//   tail: Node { val: 20, next: null },
//   length: 3
// }
// Node { val: 350, next: Node { val: 45, next: null } }
// true
// SinglyLinkedList {
//   head: Node { val: 20, next: Node { val: 20, next: [Node] } },
//   tail: Node { val: 45, next: null },
//   length: 3
// }
// SinglyLinkedList {
//   head: Node { val: 20, next: Node { val: 20, next: [Node] } },
//   tail: Node { val: 45, next: null },
//   length: 3
// }

// [Done] exited with code=0 in 0.327 seconds

