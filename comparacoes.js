// == -> comparacao implicita (existe uma conversao automatica no tipo de variavel) compara somente o valor
const numero = 5;
const texto ='5';

console.log(numero == texto)

// === -> comparacao explicita (nao existe a conversao da variavel) compara o valor e o tipo de dado
console.log(numero === texto)

// typeof - mostra o tipo de variavel
console.log(typeof numero)
console.log(typeof texto)

// Hoje, ainda existem codigos que utilizam os ==, mas as boass praticas de programacao recomenda-se utilizar os === e fazer a conversao explicita
Number ()
String ()