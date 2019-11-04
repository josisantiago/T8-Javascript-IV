let frutas = ["banana", "morango", "bacurí", "laranja"];

const valorInput = document.querySelector(".input")

const submitar = document.querySelector(".submit")

submitar.addEventListener("click", function (){
    let digitado = frutas.find(f => f === valorInput.value)

    if (digitado === valorInput.value) {
        console.log("Achei")

    } else {
        alert("não encontrado")
    }
})