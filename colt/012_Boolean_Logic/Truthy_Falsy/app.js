const userInput = prompt("Enter something");
console.log(`given data "${userInput}" is type of ${typeof (userInput)}`)
// In JavaScript, the prompt() function always returns a string value.

if (userInput) {
    console.log("TRUTHY!")
} else {
    console.log("FALSY!")
}

if (0) {
    console.log("TRUTHY")
} else {
    console.log("FALSY")
}

if (NaN) {
    console.log("TRUTHY")
} else {
    console.log("FALSY")
}

if (undefined) {
    console.log("TRUTHY")
} else {
    console.log("FALSY")
}

if ('') {
    console.log("TRUTHY")
} else {
    console.log("FALSY")
}

if (' ') {
    console.log("TRUTHY")
} else {
    console.log("FALSY")
}