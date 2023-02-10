function toDouble(array) {
    let doubleArry = []
    let doubleNum = 0

    for (let i = 0; i < array.length; i++) {
        doubleNum = array[i] * 2
        doubleArry.push(doubleNum)
    }

    return doubleArry
}

console.log(toDouble([1, 2, 3, 4, 5]))
console.log(toDouble([10, 25, 37, 42, 54]))
console.log(toDouble([3, 5, 7]))

//別解
function toDouble2(array) {
    const doubleArry = array.map(num => num * 2)
    return doubleArry
}

console.log(toDouble2([1, 2, 3, 4, 5]))
console.log(toDouble2([10, 25, 37, 42, 54]))
console.log(toDouble2([3, 5, 7]))
