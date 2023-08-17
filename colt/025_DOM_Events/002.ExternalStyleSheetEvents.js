const buttonV2 = document.querySelector("#V2")

buttonV2.onclick = function () {
    console.log("Clicked")
    console.log("Clicked")
}

function scream() {
    console.log("dont touch me")
}

buttonV2.onmouseenter = scream;

