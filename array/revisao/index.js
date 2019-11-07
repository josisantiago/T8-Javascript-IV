const comidas = ['lasanha', 'batata', 'bacon'];

console.log(comidas[2]);

comidas.forEach((comida, posicao) => {
                           //template string
    console.log(`Na posiçao ${posicao} temos a comida: ${comida}`)
});

//concat faz a cópia do array e adiciona o elemento que a gente passa como argumento
let outrasComidas = comidas.concat('Jiló');
console.log('comidas', comidas);
console.log('outrasComidas', outrasComidas);

//join - cria uma string do array e ele usa o mesmo argumento como separador
let stringdoArray = comidas.join('... ');
console.log(stringdoArray);

//shift remove o primeiro elemento e retorna o que foi retirado (se eu der um console.log) e modifica permanentemente a string inicial
console.log(comidas.shift());
console.log(comidas);

//.pop remove o último elemento da string  e retorna o que foi retirado (se eu der um console.log) e modifica permanentemente a string inicial
console.log(comidas.pop());
console.log(comidas);

//adicionar novos elementos à array e modifica permanentemente a string inicial:
//no início: unshift
comidas.unshift('macarrão');
console.log(comidas);

//no final: .push
comidas.push('strogonoff');
console.log(comidas);

//inverte a ordem da string: reverse
comidas.reverse();
console.log(comidas);

//faz uma cópia simples delimitando o começo e o final da parte que eu
//slice(comeco, final)
let cortarAlimentos = comidas.slice(1,2);
console.log(cortarAlimentos);
console.log(comidas);

//pode remover e adicionar valores utilizando posição por onde vou começar, índice para manter o ítem que está naquela posição (0), ou para apagar o índice que está naquela posição (1)
comidas.splice(1, 0, 'alface');
console.log(comidas);

//colocar em ordem alfabética a array
comidas.sort();
console.log(comidas);


comidas.push('batata');

//para encontrar a posição de um elemento dentro da array
console.log(comidas.indexOf('batata'));
console.log(comidas.lastIndexOf('batata'));

//manipula os elementos da array e retorna a array com esses novos valores. No caso abaixo, todos os lementos retornarão com o complemento 'gostosa'
let mapArray = comidas.map((comida)=> `${comida} Gostosa`);
console.log(mapArray);

//.filter: filtra a array e traz todos os elementos da array que for percorrida
let arrayProcura = comidas.filter((comida) => comida === 'batata');
console.log(arrayProcura);

//reduce
let juntaComida = comidas.reduce((esq,dir) => {
    return `${esq} e ${dir}`
});
    console.log(juntaComida);

//find: procura e retorna o número soliciitado

console.log(numeros.find(numero => numero ===1));
console.log(numeros.findIndex(numero => numero ===1));

//every: retorna todos os valores que retorna a lógica que eu pedi
menorQueDez = (algumValor) => algumValor < 10;
console.log(numeros.every(numero => menorqueDez(numero)));




