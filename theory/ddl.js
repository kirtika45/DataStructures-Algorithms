class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.previous = null
    }
}

class DoublyLinkedList{
    constructor(val){
        const newNode = new Node(val);
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

push(val){
    const newNode = new Node(val);
    if(!this.head){
        this.head = newNode
        this.tail = this.head
        this.length = 1
        this.tail.next = null
        this.head.previous = null
    }
    else{
        this.tail.next = newNode
        newNode.previous = this.tail
        this.tail = newNode
        // this.tail.next = null
        this.length++
    }
    return this
}    

pop(){
    if(!this.head) return undefined
    if(this.length==1){
        this.head = null
        this.tail = null
    }
    
    else{
        let temp = this.tail
        this.tail = this.tail.previous
        this.tail.next = null
        temp.previous = null
    }
    this.length --
    return this
}

unshift(val){
    const newNode = new Node(val)
    if(!this.head){
        this.head = newNode
        this.tail = newNode
    }
    else{
    this.head.previous = newNode
    newNode.next = this.head
    this.head = newNode
    this.head.previous = null
    }
this.length++  
return this
}

shift(){
    if(!this.head) return undefined
    if(this.length==1){
        this.head = null
        this.tail = null
    }
    else{
        let temp = this.head
        this.head = this.head.next
        this.head.previous = null
        temp.next = null
    }
this.length --
return this
}

get(index){
    let temp;
    if(index>=this.length|| index<0) return undefined
    if(index==0){
        return this.head.val
    }
    if(index==this.length-1){
        return this.tail.val
    }
    if(index<=this.length/2){
        temp = this.head
        for(let i =0;i<index;i++){
            temp = temp.next
        }
       
    }
    else{
        temp = this.tail
        for(let i = this.length-1;i>index;i--){
            temp = temp.previous
        }

    }
    return temp
}

set(index,val){
    let temp = this.get(index)
    if(temp){
        temp.val = val
        return true
    }
        return false
    
}

insert(index, val){
    if(index==0) return this.unshift(val)
    if(index==this.length) return this.push(val)
    if(index<0||index>this.length) return undefined
    else{
        let before = this.get(index).previous
        let after = this.get(index)
        const newNode = new Node(val)
        before.next = newNode
        newNode.next = after
        newNode.previous = before
        after.previous = newNode
        this.length++
    }
    return this
}

remove(index){
    if(index == 0) return this.shift()
    if(index == this.length-1) return this.pop()
    if(index<0||index>=this.length) return undefined
    else{
        let before = this.get(index).previous
        let after = this.get(index).next
        before.next = after
        after.previous = before
        this.length--
    }
    return this
}

}

let first = new DoublyLinkedList(10);
first.push(20)
first.push(30)
first.push(40)
console.log(first.remove(0))