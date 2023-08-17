let randomNumber = parseInt((Math.random() * (10)) + 1);
let guess;
let count = 0;
while (guess != randomNumber) {
    guess = prompt("enter number here");
    if (guess === "q") {
        break;
    };
    guess = parseInt(guess);
    count = count + 1;
    if (isNaN(guess) || guess > 10 || guess < 1) {
        alert("enter number between 1 to 10")
        continue;
    };
    if (guess > randomNumber) {
        alert("Too high")
    };
    if (guess < randomNumber) {
        alert("Too Low")
    }
};
if (guess !== "q") {
    alert(`You guessd the number ${randomNumber} in ${count} gusses`)
    console.log(`You guessd the number ${randomNumber} in ${count} gusses`)
}
else {
    alert("You didn't gussed the number")
}