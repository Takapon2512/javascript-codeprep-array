function sortByLength(array) {
    const sortArry1 = array.sort()
    const sortArry2 = sortArry1.sort((a, b) => {
        return b.length - a.length
    })
    return sortArry2
}

console.log(sortByLength(["ccc", "dddd", "a", "bb", "eeeee"]))
console.log(sortByLength(["apple", "banana", "chicken", "doughnut", "egg"]))
console.log(sortByLength(["Taro", "Jiro", "Saburo"]))