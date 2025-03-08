//Contains BST, BFS, DFS

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
    let temp = this.root
    const newNode = new Node(value)
    if(this.root==null){
        this.root = newNode
        return this
    }
    while(true){
        if(newNode.value < temp.value){
            if(temp.left==null){
            temp.left = newNode
            return this
       }
        temp = temp.left
    }
        else{
                if(temp.right==null){
                    temp.right = newNode
                    return this
            }
            temp = temp.right
        }
    }
}
// Breadth first search
BFS(){
    let queue = []
    let results = []
    let currentNode = this.root
    queue.push(currentNode)
    while(queue.length){
        currentNode = queue.shift()
        results.push(currentNode.value)
        if(currentNode.left){
            queue.push(currentNode.left)
        }
        if(currentNode.right){
            queue.push(currentNode.right)
        }
    }
    return results
}
//depth first search -> this uses recursion :)
DFSPreOrder(){
    let results = []
    function traverse(currentNode){
        results.push(currentNode.value);
        if(currentNode.left) traverse(currentNode.left)
        if(currentNode.right) traverse(currentNode.right)
    }
traverse(this.root)
return results
}

DFSPostOrder(){
    let results = []
    function traverse(currentNode){
        if(currentNode.left) traverse(currentNode.left)
        if(currentNode.right) traverse(currentNode.right)
        results.push(currentNode.value)
    }
    traverse(this.root)
    return results
}
DFSInOrder(){
    let results = []
    function traverse(currentNode){
        if(currentNode.left) traverse(currentNode.left)
        results.push(currentNode.value)
        if(currentNode.right) traverse(currentNode.right)
    }
traverse(this.root)
return results
}
}


let first = new BST();
first.insert(40)
first.insert(30)
first.insert(50)
first.insert(25)
first.insert(35)
first.insert(45)
first.insert(55)
console.log(first);
console.log(first.BFS())
console.log(first.DFSPreOrder())
console.log(first.DFSPostOrder())
console.log(first.DFSInOrder())