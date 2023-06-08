//declaracao de funcao padrao
function apresentar(nome){
    return `Meu nome é ${nome}`;
}

//Arrow Function
const apresentacaoAroow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//Arrow Function com mais de uma linha de instrucao
const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10){
        return "somente numeros de 0 a 9";
    } else {
        return num1 + num2;
    }
}