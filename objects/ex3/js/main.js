const renderNavbar = new NavBar 
renderNavbar.render()

//map é um método que processa tudo o que está dentro da array (neste caso são os resultados) e retorna uma nova array
document.querySelector('.cards').innerHTML = resultados.map(receita => {
    return new Card(receita).render()

    
})

//Fazer o filtro da navbar funcionar, pegar o valor do input e mostrar os resultados se o valor inserido for igual ao título ou algum ingrediente da lista resultados

document.querySelector('.button__search').addEventListener('click', 
    function() {
    let inputValue = document.querySelector('.input__search').value.toUpperCase()
    
    //O método  filter() vai percorrer cada elemento de um array e colocar, em um novo array, os elementos que retornam TRUE, de acordo com a função especificada no nosso filtro.
    let achados = resultados.filter(receita => {

        //o meu inputvalue está incluso em alguma parte do título OU dos ingredientes
        return receita.titulo.toUpperCase().includes(inputValue) || receita.ingredientes.toUpperCase().includes(inputValue)
    })
        document.querySelector('.cards').innerHTML = 
        achados.map(encontrado => {
            return new Card(encontrado).render()
            //o join retorna uma string processada, ao invés de uma array como no forEach, com o separador que eu indicar dentro dos parêntese
        }).join("")
})


   
     