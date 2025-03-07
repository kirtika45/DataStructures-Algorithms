class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Queue{
    constructor(val){
        const newNode = new Node(val)
        this.first = newNode
        this.last = newNode
        this.length = 1
    }

enqueue(val){
    const newNode = new Node(val)
    if(!this.first){
        this.first = newNode
        this.last = newNode
    }
    else{
    this.last.next = newNode
    this.last = newNode
    }
    this.length++
    return this
}
dequeue(){
    if(!this.first) return undefined
    if(this.length==1){
        this.first = null
        this.last = null
        this.length--
    }
    else{
    let temp = this.first
    this.first = this.first.next 
    temp.next = null
    this.length--
    }
    return this
}

}

let example = new Queue(10)
example.enqueue(20)
example.enqueue(30)
example.dequeue()
example.dequeue()
example.dequeue()
example.dequeue()
console.log(example)