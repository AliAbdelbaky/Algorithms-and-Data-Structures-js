const addUpTo = (n) => {
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += i
    }
    console.log(total)
    return total
}
const t1 = performance.now()
addUpTo(1000000000)
const t2 = performance.now()
console.log(`Time of first function is ${(t2 - t1) / 1000} seconds`)
//-- func 2 
const addUpTo2 = (n) => {
    const t = n * (n + 1) / 2
    console.log(t)
    return t
}
const t1_ = performance.now()
addUpTo2(1000000000)
const t2_ = performance.now()
console.log(`Time of second function is ${(t2_ - t1_) / 1000} seconds`)