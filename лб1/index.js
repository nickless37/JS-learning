//console.log (`hello Daniil`) 
const button = document.getElementById("B1")
const text = document.getElementById("v3")
button.addEventListener("click", () => {
    alert('Hello Daniil')
    console.log (`Hello Daniil`)
    text.textContent = `Hello Daniil`
});