let x = '';
console.log(x)
x = 'oi';
// como foi visto ao rodar programa no terminal, nao apareceu nada, pois o JS roda linha por linha do programa e mesmo q a variavel x sofreu alteracao, o console esta antes dessa alteracao
// para isso, e para evitar tais situações, existe as funcoes

// tres formas de escrever funcoes

//1 - Declaracao de Funcao
//declarar funcao
function imprimeTexto(texto){
    console.log(texto)
}
//executa funcao (1 ou + vezes)
imprimeTexto('oi');
imprimeTexto('outro texto');

//outro exemplo - não é declarado a variavel, mas sim dado o comando return
function soma(){
    return 2 + 2;
}
console.log (soma())

//outro exemplo - nesse caso ele esta executando a funcao soma, retornando o "4" e jogando dentro de outra funcao'
function imprimeTexto(texto){
    console.log(texto)
}
imprimeTexto(soma());