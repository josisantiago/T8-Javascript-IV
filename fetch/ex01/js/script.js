//fazer o fetch pra ver se carregamos o array de cartas

const cardSection = document.getElementById("cards-section")
const errorSection = document.getElementById("error")
const loading = document.getElementById("spiner")
const placeholder = {
    nome:'Carta não carregada',
    tipo: 'Arcano Maior',
    descricao: 'http;//via.placeholder.com/250x500',
    link: 'httos://www.astrolik.com.br/'
}

reinderizaCarta = carta => {
    // loading.style.display = 'none'
    const novaCarta = new Card(carta).render()
    cardSection.innerHTML = novaCarta
}

// fetch('tarot.json').then(response => {
//     return response.json()
    
// }).then(json => {
//     console.log(json)
//     reinderizaCarta(selecionaCartaAleatoria(json))
    
// })

//fazer função para tirar uma nova carta aleatória
    selecionaCartaAleatoria = cartas => {
        let novaCarta = Math.floor(Math.random() * cartas.length)
        return cartas[novaCarta]

    }

    //transforma nosso fetch numa função assync await
    async function carregaCartas() {
        // loading.style.display = 'block'
        try{
        const response = await fetch('tarot.json')

        //se ocorrer erro, retorna a resposta do status e do tipo de errp
        if(!response.ok) throw `com o status ${response.status}`

        const json = await response.json()
        reinderizaCarta(selecionaCartaAleatoria(json))
    }catch(e){
        reinderizaCarta(placeholderCard)
        errorSection.innerHTML = `A requisição falhou: ${e}`
    }
}

novaCarta = () => {
    carregaCartas()
}

