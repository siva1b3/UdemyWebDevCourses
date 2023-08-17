const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}
// ===================================
// USING FOR...IN TO ITERATE AN OBJECT
// ===================================

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

console.log("keys list using objects class method")
console.log(Object.keys(testScores))

console.log("values list using objects class method")
console.log(Object.values(testScores))

console.log("pairs list using objects class method")
console.log(Object.entries(testScores))


for (let keys1 of Object.keys(testScores)) {
    console.log(`key value is ${keys1}`)
}

for (let values1 of Object.values(testScores)) {
    console.log(`value in pair ${values1}`)
}

for (let values1 of Object.entries(testScores)) {
    console.log(`entries are ${values1}`)
}

