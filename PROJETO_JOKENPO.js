var prompt = require('prompt-sync')();

let pedra = 'pedra';
let papel = 'papel';
let tesoura = 'tesoura';
let rodadas = 0;
let pontopc = 0;
let ponto = 0 ;
let resultado = 0;
let escolha = '';
let sim = 's';
let nao = 'n';

console.log('Vamos jogar JOKENPO! É simple basta escolher entre pedra, papel e tesoura escolher quantas rodadas quer jogar.');

while(true){
    rodadas += +prompt('Quantas rodadas dejesa jogar? ');
    if (isNaN(rodadas)||rodadas < 1 ){
        console.log('Número inválido.');
} else {
    break;
} 
} 

while(escolha = true){
        escolha = prompt('Escolha seu elemento: '); 
        if(escolha == pedra){
            break;
        } else if(escolha == papel){
            break;
        } else if(escolha == tesoura){
            break;
        } else{
            console.log('Elemento inválido.');
        }
}

let escolhapc = 'papel';

console.log ();
console.log('Você escolheu: '+escolha+', computador escolheu: '+escolhapc);
console.log ();

if(escolha == pedra && escolhapc == tesoura){
    console.log('Pedra ganha de tesoura!');
    resultado = ponto++;
} else if(escolha == pedra && escolhapc == papel){
    console.log('Papel ganha pedra!');
    resultado = pontopc++;
} else if(escolha == papel && escolhapc == tesoura){
    console.log('Tesoura ganha papel!');
    resultado = pontopc++;
} else if(escolha == papel && escolhapc == pedra){
    console.log('Papel ganha pedra!');
    resultado = ponto++;
} else if(escolha == tesoura && escolhapc == pedra){
    console.log('Pedra ganha tesoura!'); 
    resultado = pontopc++;
} else if(escolha == tesoura && escolhapc == papel){
    console.log('tesoura ganha papel!');
    resultado = ponto++;
} else if (escolha == papel && escolhapc == papel){
    console.log('Ninguém pontua!');
} else if (escolha == pedra && escolhapc == pedra){
    console.log('Ninguém pontua!');
} else if (escolha == tesoura && escolhapc == tesoura){
    console.log('Ninguém pontua!');
}

console.log ();
console.log('Você jogou '+rodadas+' rodada(s) e ganhou: '+ponto+' e PC ganhou: '+pontopc);
console.log ();

if(ponto > pontopc){
    console.log('Você ganhou, PC perdeu!');
} else if(pontopc > ponto){
    console.log('PC ganhou, você perdeu!')
} else if(ponto == pontopc){
    console.log('Ninguém ganhou!')
}

console.log(prompt('Deseja jogar novamente(S ou N)? '));

if(sim == 's'){
    rodadas;
} else if(nao == 'n'){
    console.log('Obrigado por jogar!');
} 