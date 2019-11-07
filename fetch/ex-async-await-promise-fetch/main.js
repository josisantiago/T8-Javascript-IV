
//colocar a imagem criando uma tag img no body
//lidando com erros

fetch("rainbow.jpg").then(response => {
    console.log(response)
    return response.blob()
}).then(blob => {
    console.log(blob)
    document.getElementById("rainbow").src = URL.createObjectURL(blob)
})

//async await

async function pegaArcoIro() {
    const response = await fetch('rainbow.jpg')
    const blob = await response.blob()
    console.log(response)
    console.log(blob)
    document.getElementById("rainbow").src = URL.createObjectURL(blob)
}

pegaArcoIro().then(() => console.log('YAY, carregou!')).catch(() => console.log('Ops, não carregou!'))