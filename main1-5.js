function filterEven(array) {
  let discrimination = 0
  let evenNum = []

  for (let i = 0; i < array.length; i++) {
    discrimination = array[i] % 2

    if (discrimination === 0) {
        evenNum.push(array[i])
    }
  }

  return evenNum

}

console.log(filterEven([1, 2, 3, 4, 5]))
console.log(filterEven([10, 25, 37, 42, 54]))
console.log(filterEven([3, 5, 7]))

//別解
function filterEven2(array) {
    let filterResult = array.filter((value) => {
        const discrimination = value % 2
        return discrimination === 0
    })

    return filterResult
} 


console.log(filterEven2([1, 2, 3, 4, 5]))
console.log(filterEven2([10, 25, 37, 42, 54]))
console.log(filterEven2([3, 5, 7]))