class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(val){
        const newNode = new Node
        this.head = newNode
        this.tail = this.head
        this.length = 1
        
    }
    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            this.length++;

        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }
    }

    pop(val){
        const newNode = new Node(val)
        if(!this.head) return undefined
        let temp = this.head;
        let pre = this.pre;
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

}

let first = new SinglyLinkedList(10);
first.push(20);
first.push(25);
first.push(30);
// first.pop()
first.push(30);
console.log(first)

