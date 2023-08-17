const container = document.querySelector("#container")
src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

for (let i = 1; i <= 1000; i++) {
    const containerPeokemon = document.createElement("div")
    const imagePokemon = document.createElement("img")
    const numberPeokemon = document.createElement("p")
    numberPeokemon.textContent = ` -- ${i} -- `
    containerPeokemon.appendChild(imagePokemon)
    containerPeokemon.appendChild(numberPeokemon)
    containerPeokemon.classList.add("containerPeokemon")
    numberPeokemon.classList.add("numberPeokemon")
    imagePokemon.src = src + `${i}.png`
    container.append(containerPeokemon)
}
