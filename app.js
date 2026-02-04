/*****************************************************************************************************************************************************************
 * Objetivo: Desenvolver um sistema para calcular os juros compostos
 * Data: 04/02/2026
 * Autor: Lucas Kolle
 * versão: 1.0.2.26
*****************************************************************************************************************************************************************/
console.log("*******INICIANDO CALCULADORA*******")

//importando biblioteca
const readline = require("readline")

//criando objeto para entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/*começando a coletar os dados*/

//coletando nome do cliente
entradaDeDados.question("Digite o nome do cliente:", function (nome){
    
    //criando variável para trabalhar com o nome do cliente
    let nomeCliente = nome

    //coletando nome do produto
    entradaDeDados.question("Digite o nome do produto:", function(produto){

        //criando variável para trabalhar com o produto
        let nomeProduto = produto

        //coletando valor da compra
        entradaDeDados.question("Digite o valor do produto:", function(valor){

            //criando variável para trabalhar com o valor do produto
            let valorCompra = valor

            //coletando taxa de juros SEM CONVERTER
            entradaDeDados.question("Digite a taxa de juros:", function(juros){

                //criando variável para trabalhar com juros
                let taxaJuros = juros

                //convertendo a taxa de juros
                let taxaConvertida = Number(taxaJuros) / 100

                //coletando opção de tempo (em meses ou em anos)
                entradaDeDados.question("Você deseja colocar o tempo em MESES(1) ou em ANOS(2)?", function(tempo){
                    
                    //criando variável para trabalhar com o tempo
                    let tempoPagamento = tempo
                })//fecha tempo
            })//fecha juros
        })//fecha valor
    })//fecha produto
})//fecha nome