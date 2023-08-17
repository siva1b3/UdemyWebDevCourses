let min = 1;
let max;
while (true) {
    max = prompt('Enter max number, please');
    if (max === "q") {
        break
    }
    max = parseInt(max);
    let randomNumber = parseInt((Math.random() * (max - min)) + min);
    let count = 0;

    if (typeof max === "number" && max >= 1) {
        while (true) {
            let inputNumber = prompt(`Enter a number between min ${min} and max ${max}`);
            if (inputNumber === "q") {
                break
            }
            inputNumber = parseInt(inputNumber);

            if (typeof inputNumber === "number" && inputNumber >= min && inputNumber <= max) {
                if (inputNumber < randomNumber) {
                    alert("Too low");
                } else if (inputNumber > randomNumber) {
                    alert("Too high");
                } else {
                    const message = `Congratulations! You guessed the number ${randomNumber} in number of guess ${count}`;
                    alert(message);
                    console.log(message);
                    break; // Exit the loop when the number is guessed correctly
                }
            }
            else {
                alert("Enter a valid number");
            }
            count++;
        }
    } else {
        alert('Enter proper max number, please');
    }

    if (typeof max === "number" && max >= 1) {
        console.log("quit")
        break
    }
}