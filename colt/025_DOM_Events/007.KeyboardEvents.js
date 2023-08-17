const button = document.querySelector("button")

button.addEventListener("click", function (event) {
    console.log(event)
})

const input = document.querySelector("input")

input.addEventListener("keydown", function (event) {
    console.log(event)
    console.log(`KEYDOWN ${event.timeStamp}`)
})

input.addEventListener("keyup", function (event) {
    console.log(event)
    console.log(`KEYUP ${event.timeStamp}`)
})

input.addEventListener("keypress", function (event) {
    console.log(event)
    console.log(`KEYPRESS ${event.timeStamp}`)
})

const input2 = document.querySelector("#input2")


input2.addEventListener("keydown", function (event) {
    switch (event.code) {
        case "ArrowLeft":
            console.log("LEFT")
            break;
        case "ArrowRight":
            console.log("RIGHT")
            break;
        case "ArrowUp":
            console.log("UP")
            break;
        case "ArrowDown":
            console.log("DOWN")
            break;
        default:
            console.log("IGNORED")
            break;
    }
})