//construir botão
class Botao {
    constructor(texto, cor, tamanho, icone) {
        this.texto = texto
        this.cor = cor
        this.tamanho = tamanho
        this.icone = icone
    }
    //lógica para alterar o botão
    desenhaBotao() {
        const novoBotao = document.createElement('button')
        novoBotao.setAttribute('class', `${this.cor} ${this.tamanho}`)
        if (this.icone) {
            const tagIcone = document.createElement('i')
            tagIcone.setAttribute('class', `fas ${this.icone}`)
            novoBotao.appendChild(tagIcone)
            const text = document.createTextNode(this.texto)
            novoBotao.appendChild(text)
        } else{
            novoBotao.innerHTML = this.texto
        }
        document.getElementById('buttons-section').appendChild(novoBotao)
    }

//ou para criar o botão
desenhaBotaoString(){
    return `<button class="${this.cor} ${this.tamanho}">
            ${this.icone ? `<i  class= "fas ${this.icone}"></i>`: ''} ${this.texto}
            </button>
    `
}
}

const botaoVerde = new Botao('Enviar', 'verde', 'pequeno', 'fa-plus')
botaoVerde.desenhaBotao()
//fa-plus é um ícone
const botaoRoxo = new Botao('Botao novo', 'roxo', 'grande', 'fa-infinity')
botaoRoxo.desenhaBotao()

const botaoAzul = new Botao('Eu que fiz', 'azul', 'medio', 'fa-child')
botaoAzul.desenhaBotao()

document.getElementById('buttons-section').insertAdjacentHTML('beforeend', botaoVerde.desenhaBotaoString())

