function findIndexOfStr(array, str) {
    let indexAry = []
    let sumIndex = 0

    for (let i = 0; i < array.length; i++) {
        let result = array[i].indexOf(str)
        indexAry.push(result)

        if (result > 0) {
            return result
        }
    }

    if (array.length === 0) {
        return -1
    }
    
    sumIndex = indexAry.reduce((a, b) => {
        return a + b
    })
    
    if (sumIndex === -array.length) {
        return -1
    } 

}

console.log(findIndexOfStr(["abc", "def", "ghi"], "e"))
console.log(findIndexOfStr(["Alice", "Bob", "Charles"], "a"))
console.log(findIndexOfStr(["Alice", "Bob", "Charles"], "x"))
console.log(findIndexOfStr([], "a"))