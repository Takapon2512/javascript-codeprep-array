function max(array) {
    if (array.length === 0) {
        return -1
    }

    const maxNum = array.reduce((a, b) => Math.max(a, b))
    return maxNum
}

console.log(max([3, 7, 8, 4, 2]))
console.log(max([150, 82, 93, 2042, 827, 30, 5, 222]))
console.log(max([]))