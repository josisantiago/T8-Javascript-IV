const cepInput = document.getElementById("cep")
const logradouroInput = document.getElementById("logradouro")
const complementoInput = document.getElementById("complemento")
const bairroInput = document.getElementById("bairro")
const localidadeInput = document.getElementById("localidade")
const ufInput = document.getElementById("uf")

//... continuem a pegar os inputs do index.html para preencher depois com o valor da api

cepInput.addEventListener("blur", ()=>{
    //o evento blur é qdo clica fora do botão
    if(cepInput.value){
        fetch(`https://viacep.com.br/ws/${cepInput.value}/json`).then(response => {
            return response.json()
        }).then(json => {
            ///façam aparecer os valores nos inputs
            preencherCampos(json)
        })
    }
})

preencherCampos = dados => {
    logradouroInput.value = dados.logradouro
    complementoInput.value = dados.complemento
    bairroInput.value = dados.bairro
    localidadeInput.value = dados.localidade
    ufInput.value = dados.uf
}

