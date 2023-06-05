//var -> tipo de variavel mais 'solta', permite facilmente alteracoes durante o programa... não é recomendavel usar

//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento;

//var area;

//console.log(area)


//let -> tipo de variavel que precisa primeiramente ser declarada, pra depois usar, por squestao de segurança da propria aplicacao
//let forma = 'retangulo'
//let altura = 5;
//let comprimento = 7;
//let area;

//if (forma === 'retangulo'){
//    area = altura * comprimento;
//}else{
//    area = (altura * comprimento)/2;
//}

//console.log(area)

//const -> uma vez declarada, nao conseguimos alterar ela

const forma = 'triangulo'
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado'){
    area = altura * comprimento;
}else{
    area = (altura * comprimento)/2;
}

console.log(area)
