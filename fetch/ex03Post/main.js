const titulo = document.getElementById("titulo")
const descricao = document.getElementById("descricao")
const btnSubmit = document.getElementById("btnSubmit")

btnSubmit.addEventListener('click', function(event) {
    event.preventDefault()
    let body = JSON.stringify({
        title: titulo.value,
        body: descricao.value,
        userId: 1
    })
    
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST', 
        //headers: indica o tipo de objeto que eu vou receber
        headers:{
        "Content-type": "application/json"
    },
    body
}).then(response => response.json()).then(json=> console.log(json))
})

