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

//  removeDuplicates(){
//     let temp = this.head
//     let forward = temp.next
//     while(forward.next){
//         if(forward.val>temp.val){
//             temp = forward
//             forward = forward.next
//         }
//         else{
//             let a = forward
//             forward = forward.next
//             temp.next = forward
//             a.next = null
//             this.length--
//         }
//     }
//     return this
//  }

removeDuplicates(){
    if(!this.head) return undefined
    let temp = this.head
    while(temp.next){
        if(temp.val==temp.next.val){
            temp.next = temp.next.next
            this.length--
        }
        else{
            temp = temp.next
        }
    }
    return this
}

removeUnsortedDuplicates(){
    const uniqueVal = new Set();
    let current = this.head
    let prev = null
    while(current){
        if(uniqueVal.has(current.val)){
            prev.next = current.next
            this.length--
        }
        else{
            uniqueVal.add(current.val)
            prev = current
        }
        current = current.next
    }
    this.tail = prev
    return this
     
}
}


// let first = new SinglyLinkedList(10)
// first.push(20)
// first.push(30)
// first.push(30)
// first.push(40)
// console.log(first)
// console.log(first.removeDuplicates())


let first = new SinglyLinkedList(21)
first.push(8)
first.push(12)
first.push(14)
first.push(6)
first.push(14)
console.log(first)
console.log(first.removeUnsortedDuplicates())



