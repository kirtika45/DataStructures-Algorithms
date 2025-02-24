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

 //myMethod
 findMiddle(){
    if(!this.head) return null
    let temp = this.head
    let count = 0
    if(this.length%2==0){
        while(count<(this.length/2)){
            temp = temp.next
            count ++
        }
        return temp
    }
    else{
    while(count < ((this.length/2)+0.5)-1){
        temp = temp.next
        count++
    }
    return temp
    }}

// findMiddle(){

// }

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


let first = new SinglyLinkedList(10)
first.push(20)
first.push(30)
first.push(40)
console.log(first.findMiddle().val)
console.log(first.reverse())
