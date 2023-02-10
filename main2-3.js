function removeOdd(array) {
    for (let i = 0; i < array.length; i++) {
        let num = array[i]
        if (num % 2 === 1) {
            array.splice(i, 1)
            i -= 1
        }

    }

    return array
}

console.log(removeOdd([1, 2, 3, 4, 5]))
console.log(removeOdd([10, 25, 37, 42, 54]))
console.log(removeOdd([3, 5, 7]))

//別解
function removeOdd2(array) {
    const result = array.filter(num => num % 2 === 0)
    return result
}

console.log(removeOdd2([1, 2, 3, 4, 5]))
console.log(removeOdd2([10, 25, 37, 42, 54]))
console.log(removeOdd2([3, 5, 7]))