function falarDepoisDe(segundos, frase) {
    return new Promisse((resolve, reject)=> {
        if (segundos > 10){
            reject('Muito tempo para esperar')
        }
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}
falarDepoisDe(3, 'Hum, esperei para falar').then(frase=> console.log(`${frase} - vim da promisse`)).catch(e=> console.log(e))
