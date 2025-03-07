//BST Constructor
class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

insert(value){
    const newNode = new Node(value)
    if(this.root==null){
        this.root = newNode
        return this
    }  
    let temp = this.root
    if(newNode.value == temp.value) return undefined
    while(true){
        if(newNode.value < temp.value){
            if(temp.left == null){
                temp.left = newNode
                return this
            }
            temp = temp.left
            }

        else{
            if(temp.right == null){
                temp.right = newNode
                return this
            }
            temp = temp.right
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    }
    
}
}



let first = new BST();
first.insert(9);
first.insert(10)
first.insert(15)
first.insert(5)
console.log(first)
