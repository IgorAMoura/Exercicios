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




let opcao = window.prompt("MENU\ndigite a opcao que deseja:\n\n1 - exercicio ver semana\n2 - exercicio notas\n3 - exercicio ver idade")

switch (opcao)
{case "1": 
exercicio1()
break;

default:
break;

}