// function printRecursive(num){
//     printRecursive(num)
// }

// printRecursive(1)

function printRecursive(num){
    if(num <= 10){
        console.log(num)
        printRecursive(num+1)
    }
}

printRecursive(1)