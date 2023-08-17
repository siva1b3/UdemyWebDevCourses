// #############################################
// BREAK STATEMENT 
// ONLY BREAKS LOOPS NOT CONDITIONS STATEMENTS 
// #############################################

let num = 0
while (num < 20) {
    console.log(num)
    num += 2
    if (num === 12) {
        break
    }
}

for (let i = 0; i <= 30; i++) {
    for (let j = 100; j >= 0; j -= 10) {
        console.log(`value of i is ${i} value of j is ${j}`)
        if (j === 40) {
            break
        }
    }
    if (i === 20) {
        break
    }
}