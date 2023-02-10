function makePrimeArray(n) {
    let num = 1
    let primeArray = []
    while (num <= n) {
        if (primeJudge(num) === true) {
            primeArray.push(num)
        } 
        num++
    }
    return primeArray
}

const primeJudge = (val) => {
    if (val === 1) {
        return false
    } else if (val === 2) {
        return true
    } else {
        for (i = 2; i < val; i++) {
            if (val % i === 0) {
                return false
            } 

            if (i + 1 === val) {
                return true
            }
        }
    }
}

console.log(makePrimeArray(1))
console.log(makePrimeArray(2))
console.log(makePrimeArray(8))
console.log(makePrimeArray(20))
