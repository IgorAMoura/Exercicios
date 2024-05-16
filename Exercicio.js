function exercicio1()
{let numero = prompt("Insira um numero de 1 a 7: " )

if (numero == "1")
{console.log ("Segunda-feira")}

else if (numero == "2")
{console.log ("Terça-feira")}

else if (numero == "3")
{console.log ("Quarta-feira")}

else if (numero == "4")
{console.log ("Quinta-feira")}

else if (numero == "5")
{console.log ("Sexta-feira")}

else if (numero == "6")
{console.log ("Sabado")}

else if (numero == "7")
{console.log ("Domingo")}

else {console.log ("Nenhum dia correspondente")
alert ("Insira um numero valido")}}


function exercicio2()
{let nota1 = parseFloat(prompt("Insira a primeira nota: "))

let nota2 = parseFloat(prompt("Insira a segunda nota: "))

let nota3 = parseFloat(prompt("Insira a terceira nota: "))

let nota4 = parseFloat(prompt("Insira a quarta nota: "))

let notafinal = ((nota1 + nota2 + nota3 + nota4) / 4)

if (notafinal >= 7)
{console.log ("Aluno Aprovado")}

else if (notafinal >= 5 < 7)
{console.log ("Aluno de Recuperacao")}

else if (notafinal < 5)
{console.log ("Aluno Reprovado")}}


function exercicio3()
{let data = parseInt(prompt("insira seu ano de nascimento "))

if (data - 2023 <= 18)
{console.log ("Acesso permitido")}

else {console.log ("Acesso negado")}}


function exercicio4()
{for(numero = 1; numero <= 10; numero++)
    {if(numero % 2 == 0){console.log(numero)}}}


function exercicio5()
{let numero = parseInt(prompt("insira um numero: "))
{console.log("tabuada de 1 a 10: ")}

if(!isNaN(numero)){
for(multi = 1; multi <= 10; multi++)
{console.log(numero + "x" + multi + "=" + (numero*multi))}}
else{console.log("numero invalido")}}


function exercicio6()
{let numero = parseInt(prompt("insira"))

do{numero = parseInt(prompt("digite um numero: "))}
while(numero !== 0)}


let opcao = window.prompt("MENU\ndigite a opcao que deseja ou sair para encerrar o programa:\n\n1 - Exercicio ver semana\n\n2 - Exercicio notas\n\n3 - Exercicio ver idaden\n\n4 - Exercicio numeros pares\n\n5 - Exercicio tabuada\n\n6 - Exercicio numero zero")

switch (opcao)
{case "1": 
exercicio1()
break;

case "2":
exercicio2()
break;

case "3":
exercicio3()
break;

case "4":
exercicio4()
break;

case "5":
exercicio5()
break;

case "6":
exercicio6()
break;

default:
break;
}