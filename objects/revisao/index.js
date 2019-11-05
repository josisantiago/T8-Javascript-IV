//variável tipo objeto
//abaixo, notação literal (declarar objetos por chaves)
//instanciar um objeto (fazer um objeto de um modelo)
// const crianca = new Object;
// console.log(typeof crianca);
// crianca.nome = "Eliane";
// crianca.idade = 5;
// console.log(crianca);

// const crianca2 = {
//     nome: 'Paulo',
//     idade: 6,
//     endereco: {
//         logradouro: 'Rua dos bobos',
//         numero: 0,
//         referencia: [
//             {
//             endereco: {
//                 logradouro: 'Rua dos bobos',
//                 numero: 2,
//                 descricao: 'Mercado'
//             }
//         }
//     ]
// },

//     responsaveis: [{
//     nome: 'Tereza',
//     telefone: '27916997',
//     parentesco: 'tia'
// }],
// }

// //fazendo um objeto a partir de uma função. Crianca está em maiúsculo pa é uma função que vai gerar um modelo
// //funcao construtora
// function Crianca(nome, idade, altura){
//     //encapsulamento:
//     this.nome = nome
//     this.idade = idade
//     this.altura = altura
//     this.podeBrincar = () => {
//         return (altura > 1)
//     }
// }

// const c1 = new Crianca('Bete', 6, 1.1)
// console.log(`${c1.nome} tem ${c1.altura} e ${c1.podeBrincar() ? 'pode brincar':'não pode brincar'}`) 
// const c2 = new Crianca('Carlos', 4, 0.8)
// console.log(`${c2.nome} tem ${c2.altura} e ${c2.podeBrincar() ? 'pode brincar':'não pode brincar'}`) 

// //função que retorna um objeto a partir de um jso é o JSON.parse. JSON é uma notação TEXTUAL de um objeto
// // const fromJSON = JSON.parse(`{'info': "vim do JSON"}`)
// // console.log(fromJSON)
// // console.log(fromJSON.info)

// //os valores da constante pessoa estão no endereço A
// const pessoa = {nome: "Gustavo"} 
// console.log(pessoa)
// pessoa.nome = 'Geraldo'
// console.log(pessoa)

// //os valores da constante pessoa estão no endereço A
// const pessoa2 = pessoa
// pessoa2.nome = 'Tereza'
// console.log(pessoa)
// console.log(pessoa2)

// // //métodos de capturar objeto
// // //1- retorna os atributos do objeto
// // console.log(Object.keys(crianca2))
// // //2- retorna os valores do objeto
// // console.log(Object.values(crianca2))
// // //3- retorna uma array da array (contendo chave e valor)
// // (Object.entries(crianca2))

// // //define a propriedade do objeto
// // Object.defineProperty(crianca2, 'dataNascimento', {
// //     //para não ser listado:
// //     enumerable: false,
// //     //para não ser subscrito:
// //     writable: false,
// //     //para atribuir um novo valor:
// //     value: '19/04/2007'
// // })

// // //concaternar todos os objetos no mesmo objeto: Object.assign
// // const dest = {a:1}
// // const o1 = {b:2}
// // const o2 = {c:3, a:4}
// // const obj5 = Object.assign(dest, o1, o2)
// // console.log(obj5)

// // //limita os atributos do objeto: Object.preventExtensions
// // const produto = Object.preventExtensions({
// //     nome: 'Notebook',
// //     preco: 2,
// //     tag: 'promocao'
// // })

// // //Object.seal: selar o objeto (não deleta nem adiciona novos atributos ao objeto, mas pode alterar o valor)
// // const pessoa7 = {
// //     nome: 'Josiane',
// //     idade: 35
// // }
// // Object.seal(pessoa7)

// // //Object.freezer: congela tudo do objeto. Não dá pra alterar nada
// // Object.freezer(pessoa2)

// // //HERANÇA
// // function Pessoa(nome, idade, corFavorita) {
// //     this.nome = nome,
// //     this.idade = idade,
// //     this.corFavorita = corFavorita
// // }

// // let mae = new Pessoa('Ana', 35, 'vermelho')
// // let tio = new Pessoa('Cleber', 9, 'rosa')

// // Pessoa.prototype.apresentacao = function() {
// //     return `O nome da pessoa é; ${this.nome}`
// // }

// // console.dir(Pessoa)

// // //Polimorfismo
// // console.log(mae.apresentacao())
// // console.log(tio.apresentacao)
// // mae.apresentacao = function() {
// //     return `apresentação espevial da mãe ${this.nome} e tenho ${this.idade}`
// // }
// // console.log(mae.apresentacao)

//criando uma classe construtora
function Professor(nome, sobrenome, materia) {
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.materia = materia
}

Professor.prototype.dizMateria = function() {
    return `A matéria é: ${this.materia}`
}

const js3 = new Professor('Cintia', 'Fumi', 'Javascript 3')
console.log(js3.dizMateria())

const js4 = new Professor('Lydia', 'Rodrigues', 'Javascript 4')
console.log(js4.dizMateria())

js4.dizMateria = function(){
    return `A professora é: ${this.nome} e a matéria é ${this.materia}`
}
console.log(js4.dizMateria())

const avo = {attr1: 'A'}
const mae = {_proto_:avo, attr2:'B', attr3:'E'}
const filha = {_proto_:mae, attr3: 'C'}
console.log(filha.attr1, filha.attr2, filha.attr3)

class Avo {
    constructor(sobrenome = 'Rodrigues') {
        this.sobrenome = sobrenome
    }
}
 class Mae extends Avo {
     constructor(sobrenome, profissao='Cineasta'){
         super(sobrenome)
         this.profissao = profissao
     }
 }

 class Filha extends Mae {
     constructor() {
         super('Silva')
     }
 }

 const novaFilha = new filha
 novaFilha.profissao = 'Atriz'
 console.log(novaFilha)
 const novaMae = new Mae
 console.log(novaMae)