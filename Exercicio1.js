// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é admin e a senha é senha123. Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

let usuario = prompt("Digite seu nome de usuario: ");

let senha = prompt("Digite sua senha: ");

if (usuario == "admin" && senha == "senha123")
{console.log ("Login bem sucedido.")}
else {console.log ("Usuario ou senha incorretos!")}