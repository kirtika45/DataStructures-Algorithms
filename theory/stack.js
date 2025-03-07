class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}
//constructor
class Stack{
    constructor(val){
        const newNode = new Node(val)
        this.top = newNode
        this.length = 1
    }

//push
push(val){
    const newNode = new Node(val)
    if(!this.top){
        this.top = newNode
    }
    else{
    let temp = this.top
    this.top = newNode
    newNode.next = temp
    }
    this.length++
    return this
}

//pop
pop(){
    if(!this.top) return undefined
    else{
    let temp = this.top
    this.top = this.top.next
    temp.next = null
    }
    this.length--
    return this
}
}


let first = new Stack(10)
first.push(20)
first.push(30)
first.push(40)
first.push(50)
first.pop()
first.pop()
first.pop()
first.pop()
first.pop()
console.log(first)