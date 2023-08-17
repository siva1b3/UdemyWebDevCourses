const form = document.querySelector("form")

form.addEventListener("submit", function (e) {
    e.preventDefault()
    console.log("sumitted")
    console.log("sumitted")
    console.log("sumitted")
    console.log("sumitted")
    console.log("sumitted")
    const catname = document.querySelector("#textinput")
    const list = document.querySelector("#list")
    list.appendChild(document.createElement("li"))
    list.lastChild.textContent = catname.value
    catname.value = ""
})