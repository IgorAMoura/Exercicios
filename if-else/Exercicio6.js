// Exercício 6: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let data = parseInt(prompt("insira seu ano de nascimento "))

if (data - 2023 <= 18)
{console.log ("Acesso permitido")}

else {console.log ("Acesso negado")}