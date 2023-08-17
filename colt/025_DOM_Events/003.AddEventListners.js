const buttonV2 = document.querySelector("#V2")

buttonV2.onclick = function () {
    console.log("Clicked")
    console.log("Clicked")
}

function scream() {
    console.log("dont touch me")
}

buttonV2.onmousehover = scream;

const buttonV3 = document.querySelector("#V3")

buttonV3.addEventListener("click", function () {
    console.log("clicked v3")
})

function doubleClickHandler() {
    console.log("Double clicked v3 new");
}

buttonV3.addEventListener("dblclick", doubleClickHandler);


