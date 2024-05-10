// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.

let primeiro = parseInt(prompt("Insira o primeiro numero: "))

let segundo = parseInt(prompt("Insira o segundo numero: "))

let terceiro = parseInt(prompt("Insira o terceiro numero: "))

if (primeiro < segundo < terceiro)
{console.log ("esta em ordem crescente")}

else {console.log ("não esta em ordem crescente")}

