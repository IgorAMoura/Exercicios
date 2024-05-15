// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

let fib1 = 1
let fib2 = 1

console.log("os primeiros 10 numreros da sequencia de fibonacci")
console.log(fib1)
console.log(fib2)

for(let i=2; i<10; i++)
{let nextfib = fib1 + fib2
console.log(nextfib)
fib1 = fib2
fib2 = nextfib}