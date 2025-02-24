class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(val){
    const newNode = new Node(val)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
 
 
 push(val){
    const newNode = new Node(val);
    if(!this.head){
        this.head = newNode
        this.tail = this.head
        this.length ++
    }
    else{
    this.tail.next = newNode;
    this.tail = newNode;
    this.tail.next = null
    this.length++
    }
 }

detectCycleStart(){
    let slow= this.head
    let fast = this.head
    while(fast !=null && fast.next!=null){
        slow = slow.next
        fast = fast.next.next
        if(fast==slow){
            break;
        }    
    }
    if(fast==null || fast.next==null){
        return null;
    }
    let entry = this.head
    while(entry!==slow){
        slow = slow.next
        entry = entry.next
    }
    return slow;
}


}




let first = new SinglyLinkedList(0)
first.push(1)
first.push(2)
first.push(3)
first.push(4)
first.push(5)
first.push(6)
first.push(7)
first.push(8)

console.log(first)

first.tail.next = first.head.next.next
console.log(first.detectCycleStart())



