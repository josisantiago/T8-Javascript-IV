let resultados = [
    {
        titulo: "Ginger Champagne",
        ingredientes: "champagne, ginger, ice, vodka",
        imagem: "http://img.recipepuppy.com/1.jpg"
    },
    {
        titulo: "Potato and Cheese Frittata",
        ingredientes: "cheddar cheese, eggs, olive oil, onions, potato, salt",
        imagem: "http://img.recipepuppy.com/2.jpg"
    },
    {
        titulo: "Eggnog Thumbprints",
        ingredientes: "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
        imagem: "http://img.recipepuppy.com/3.jpg"
    },
    {
        titulo: "Succulent Pork Roast",
        ingredientes: "brown sugar, garlic, pork chops, water",
        imagem: "http://img.recipepuppy.com/4.jpg"
    },
    {
        titulo: "Irish Champ",
        ingredientes: "black pepper, butter, green onion, milk, potato, salt",
        imagem: "http://img.recipepuppy.com/5.jpg"
    }
];

//Fazer um componente class Card que receberá como parametro um objeto e renderizara imagem, título e ingredientes

class Card {
constructor(receita){
    this.receita = receita
}

render() {
    const {
        imagem,
        titulo,
        ingredientes
    } = this.receita
    //render é como iremos ver no react, usado para reinderizar o objeto
    return `<div class="card">
    <img class="imagem" src=${imagem} />
    <h2>${titulo}</h2>
    <p>${ingredientes}</p>
    </div>`
    
    //transformando toda a array em string
    //insertAdjacentHTML irá concatenar o texto que está dentro da tag / innerHTML substitui o que já está escrito
    document.querySelector('.cards').insertAdjacentHTML('beforeend', newCard)
  }

}
    
 //document.querySelector('.cards').insertAdjacentHTML('beforeend', '<br/><br/>')