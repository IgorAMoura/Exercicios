// Exercício 8: Cálculo de IMC
// Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros.
// Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura
// * altura). Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o
// usuário se encontra, de acordo com a tabela a seguir:
// IMC menor que 18.5: Abaixo do peso
// IMC de 18.5 a 24.9: Peso normal
// IMC de 25.0 a 29.9: Sobrepeso
// IMC de 30.0 a 34.9: Obesidade grau 1
// IMC de 35.0 a 39.9: Obesidade grau 2
// IMC maior ou igual a 40.0: Obesidade grau 3

let peso = parseFloat(prompt("insira seu peso em quilogramas: "))

let altura = parseFloat(prompt("insira sua altura em metros: "))

if (peso / (altura * altura) < 18.5)
{console.log ("esta abaixo do peso")}

else if (peso / (altura * altura) <= 24.9 >= 18.5)
{console.log ("esta no peso padrao")}

else if (peso / (altura * altura) <= 29.9 >= 25)
{console.log ("esta com sobrepeso")}

else if (peso / (altura * altura) <= 34.9 >= 30)
{console.log ("esta com obesidadde grau 1")}

else if (peso / (altura * altura) <= 39.9 >= 35)
{console.log ("esta com obesidade grau 2")}

