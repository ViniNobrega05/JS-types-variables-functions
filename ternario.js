const idadeMinima = 18;
const idadeCliente = 12;

if (idadeCliente >= idadeMinima){
    console.log('cerveja')
} else{
    console.log('suco')
}
// tudo isso acima é o if classico. e a comparacao ternaria tem por funcao minimizar essas lkinhas acima em apenas uma linha. segue abaixo:
console.log(idadeCliente >= idadeMinima ? 'cerveja' : 'suco')
//              CONDICAO                    TRUE      FALSE
//