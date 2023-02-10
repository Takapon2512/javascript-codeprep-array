function addSumToMiddle(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let forNum = array[i]
        let backNum = array[i + 1]

        let sumNum = forNum + backNum
        array.splice(i + 1, 0, sumNum)
        i++
    }

    return array
}

console.log(addSumToMiddle([1, 2, 3, 4, 5]))
console.log(addSumToMiddle([10, 25, 37, 42, 54]))
console.log(addSumToMiddle([3, 5, 7]))