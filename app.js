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

                    //criando variável para guardar o montante final
                    let montante
                    
                    //criando condicional para decidir o tempo em anos ou meses
                    if(tempo == 2){
                        
                        //coletando o tempo em anos
                        entradaDeDados.question("Digite o tempo em ANOS:", function(tempoA){

                            //criando variável para trabalhar com o tempo em anos
                            let tempoEmAnos = tempoA

                            //convertendo anos em meses
                            let tempoConvertido
                            tempoConvertido = Number(tempoEmAnos) * 12

                            /*criando validações*/
                            //validando campos vazios
                            if(nomeCliente == "" || nomeProduto == "" || valorCompra == "" || taxaJuros == "" || tempoPagamento == "" || tempoEmAnos == ""){
                                console.log("ERRO: Todos os campos devem ser preenchidos!!")

                            //validando números nos nomes (cliente e produto)
                            //colocar a " ! " antes do isNaN inverte a saída (se for um número vai sair verdadeiro)
                            }else if(!isNaN(nomeCliente) || !isNaN(nomeProduto) ){ // não precisa colocar == true, pois o else e if já trabalha com boolean
                                console.log("ERRO: Não é permitido a entrada de números nos nomes!!")

                            //validando letras nos campos númericos    
                            }else if(isNaN(valorCompra) || isNaN(taxaJuros) || isNaN(tempoPagamento) || isNaN(tempoEmAnos)){
                                console.log("ERRO: Não é permitido a entrada de letras nos campos númericos")

                            //bloquando a entrada de números negativos (menores que zero)
                            }else if(valorCompra < 0 || taxaJuros < 0 || tempoPagamento < 0 || tempoEmAnos < 0){
                                console.log("ERRO: Não é permitido a entrada de números negativos!!!")

                            //continuando projeto
                            }else{
                                
                                //calculando montante final
                                montante = Number(valorCompra) * (1 + Number(taxaConvertida)) ** tempoConvertido

                                //calculando a diferença do montando em relação ao valor da compra
                                let diferencaDoValor
                                diferencaDoValor = Number(montante) - Number(valorCompra)

                                //realizando saída
                                console.log("")
                                console.log("******************* VIVA MODA *******************")
                                console.log(`Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.\nA compra do produto ${nomeProduto}, tem um valor de: ${valorCompra}.\nA sua compra será parcelada em ${tempoConvertido} vezes e o Sr(a) pagará: ${montante.toFixed(2)}.\nO acréscimo realizado ao valor de: ${valorCompra} será de ${diferencaDoValor.toFixed(2)}.`)
                                console.log(`Muito obrigado por escolher a VIVA MODAS.\n*******************************************************`)
                            }

                        })//fecha tempoA
                    
                    //tempo em meses
                    }else{

                        //coletando o tempo em meses
                        entradaDeDados.question("Digite o tempo em MESES:", function(tempoM){

                            //criando variável para trabalhar com o tempo em meses
                            let tempoEmMeses = tempoM

                            if(tempoPagamento > 2){
                                console.log("ERRO: Você deve digitar a opção conforme orientado!!")

                            }else if(nomeCliente == "" || nomeProduto == "" || valorCompra == "" || taxaJuros == "" || tempoPagamento == "" || tempoEmMeses == "" ){
                                console.log("ERRO: Todos os campos devem ser preenchidos!!")

                            
                            }else if(!isNaN(nomeCliente) || !isNaN(nomeProduto) ){ // não precisa colocar == true, pois o else e if já trabalha com boolean
                                console.log("ERRO: Não é permitido a entrada de números nos nomes!!")

                            }else if(isNaN(valorCompra) || isNaN(taxaJuros) || isNaN(tempoPagamento) || isNaN(tempoEmMeses)){
                                console.log("ERRO: Não é permitido a entrada de letras nos campos númericos")

                            }else if(valorCompra < 0 || taxaJuros < 0 || tempoPagamento < 0 || tempoEmMeses < 0){
                                console.log("ERRO: Não é permitido a entrada de números negativos!!!")

                            }else if(valorCompra < 0 || taxaJuros < 0 || tempoPagamento < 0 || tempoEmMeses < 0){
                                console.log("ERRO: Não é permitido a entrada de números negativos!!!")

                            }else{
                                
                                //calculando montante final
                                montante = Number(valorCompra) * (1 + Number(taxaConvertida)) ** tempoEmMeses

                                //calculando a diferença do montando em relação ao valor da compra
                                let diferencaDoValor
                                diferencaDoValor = Number(montante) - Number(valorCompra)

                                //realizando saída
                                console.log("")
                                console.log("******************* VIVA MODA *******************")
                                console.log(`Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.\nA compra do produto ${nomeProduto}, tem um valor de: ${valorCompra}.\nA sua compra será parcelada em ${tempoEmMeses} vezes e o Sr(a) pagará: ${montante.toFixed(2)}.\nO acréscimo realizado ao valor de: ${valorCompra} será de ${diferencaDoValor.toFixed(2)}.`)
                                console.log(`Muito obrigado por escolher a VIVA MODAS.\n*******************************************************`)
                            }

                        })//fecha tempoM
                    }
                })//fecha tempo
            })//fecha juros
        })//fecha valor
    })//fecha produto
})//fecha nome