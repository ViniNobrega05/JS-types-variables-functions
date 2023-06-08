// parametros de funcao -> serve para a funcao receber as informacoes para funcionar corretamente

function soma(numero1 , numero2){
    return numero1 + numero2;
}
console.log (soma(2 , 2))
console.log (soma(245 , 2354))
console.log (soma(-5002 , 492))

// parametros x argumentos

// ordem dos parametros
function nomeIdade (nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}
console.log(nomeIdade(29, "Vinicius")) // CUIDADO COM AS ORDENS DOS PARAMETROS

// Outro exemplo
function multiplica(numero1 , numero2){
    return numero1 * numero2;
}
console.log(multiplica(soma(4 , 5) , soma(3 , 3)))

// Outro exemplo - NaN. Definimos um valor padrao para a variavel dentro da function
function multiplica(numero1 = 1 , numero2 = 1){
    return numero1 * numero2;
}
console.log(multiplica(soma(4 , 5)))