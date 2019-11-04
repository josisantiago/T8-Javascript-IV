const nomesNoRole = ['Adriana', 'Adrielly', 'Aline', 'Ana', 'Angelica', 'Ba', 'Babs', 'Carolzinha', 'Carolzona', 'Cecilia', 'Daiana', 'Emanuelle', 'Jackeline', 'Jennifer', 'Josiane', 'Lia', 'Marcela', 'Monique', 'Priscilla Roiz Garcia', 'Priscilla Soares Alves', 'Raissa', 'Raquel', 'Romênia', 'Rosana', 'Simara', 'Simone', 'Talita', 'Telma', 'Thaís', 'Valdeniza']

const input = document.getElementById("nome")
const submit = document.getElementById("btn")
const mensagem = document.getElementById("status")

submit.addEventListener("click", function (e) {

    e.preventDefault()

    const acharnalista = nomesNoRole.find(f => f === input.value)

    if (input.value.trim() === "") {
        mensagem.innerHTML = `Digite o nome`

    } else {

        if (acharnalista === input.value) {
            input.classList.remove("border-danger")
            input.classList.add("border-success")
            mensagem.innerHTML = `${nome.value} foi para o rolê!`
            input.value = ""

        } else {
            input.classList.remove("border-success")
            input.classList.add("border-danger")
            mensagem.innerHTML = `${nome.value} não foi para o rolê!`
            input.value = ""
        }
    }
})

const validacao = (nome => {
    if (nome.trim() === "") throw 'O campo está vazio'
})

const checaPresenca = nome => {
    let estaNaLista = nomesNoRole.find((presente) {
        return nome.toLowerCase() === presente.toLowerCase()
    })
    if (estaNaLista) {
        console.log('to na lista')
    }
}

document.getElementById('form-do-role').addEventListener('submit', function (event) {
    event.preventDefault()

    let valorCampo = document.getElementById('nome').value

    try {
        validacao(valorCampo)
    } catch (erro) {
        console.log(erro)
    }

})