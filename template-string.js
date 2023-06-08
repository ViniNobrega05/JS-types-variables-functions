const nome = 'Vini';
const apresentacao = 'Meu nome é ' + nome;

console.log (apresentacao)

const idade = 2023 - 1994;
const cidadeDeNascimento = 'Mogi das Cruzes';
const apresentacaoDois = 'Meu nome é ' + nome +', minha idade é ' + idade + ' e nasci na cidade de ' + cidadeDeNascimento;

console.log(apresentacaoDois)

//como visto no exemplo acima, é muito complicado a questao de contatenar as variaveis com strigs. O cuidado com os espacos, com os dados pode causar erro na mensagem final (no caso). por isso usamos o TemplateString. Segue o exemplo:

const apresentacaoTres = `Meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;
//passo 1 - trocar as aspas pela crase (acento grave)
//passo dois colocar as variaveis com ${variavel}
console.log(apresentacaoTres)