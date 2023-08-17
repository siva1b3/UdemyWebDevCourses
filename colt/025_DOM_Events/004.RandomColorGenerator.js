const container = document.querySelector("#container")

const headingElement = document.createElement("h1")
const buttonElement = document.createElement("button")

headingElement.textContent = "Click the bellow button to change color"
buttonElement.textContent = "color change"

container.style.textAlign = "center"
container.style.height = "100vh"

container.appendChild(headingElement)
container.appendChild(buttonElement)

function clickHandler() {
    const { mainColor, oppositeColor } = randomColorGenerator()
    container.style.backgroundColor = mainColor
    headingElement.style.color = oppositeColor
    headingElement.textContent = `New color is ${mainColor}`
}

buttonElement.addEventListener("click", clickHandler)

randomColorGenerator = () => {
    red = Math.floor((Math.random() * 254) + 1)
    blue = Math.floor((Math.random() * 254) + 1)
    green = Math.floor((Math.random() * 254) + 1)
    mainColor =
        `rgb(${red} ,${blue} ,${green})`
    oppositeColor =
        `rgb(${255 - red} ,${255 - blue} ,${255 - green})`
    return {
        mainColor: mainColor,
        oppositeColor: oppositeColor
    }
}

