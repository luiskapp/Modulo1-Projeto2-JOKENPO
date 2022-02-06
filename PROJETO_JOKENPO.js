var prompt = require('prompt-sync')();

let pedra = 'pedra', papel = 'papel', tesoura = 'tesoura', rodadas = 0, pontopc = 0, ponto = 0 , resultado = 0, escolha = '', jogo = 0, escolhapc = 0, respc = '';

console.log(`Vamos jogar JOKENPO! É simple basta escolher entre pedra, papel e tesoura e escolher quantas rodadas quer jogar.\n`);
do{
    jogo = 0
    
    rodadas = +prompt('Quantas rodadas dejesa jogar? ');
    console.log(); 

    while (rodadas > 0){
        escolha = prompt('Escolha seu elemento: '); 
        if(escolha != 'pedra' && escolha != 'papel' && escolha != 'tesoura'){
            console.log('Elemento inválido.');
        }
            escolhapc = Math.floor(Math.random() * 3 + 1);
            if(escolhapc == 1){
                respc = 'pedra';
            } else if (escolhapc == 2){
                respc = 'papel';
            } else if(escolha == 3){
                respc = 'tesoura';
            }
    console.clear();
    
    console.log('Você escolheu: '+escolha+', computador escolheu: '+respc);
    console.log(); 
        if(escolha == pedra && respc == tesoura){
            console.log('Pedra ganha de tesoura!');
            resultado = ponto++
        } else if(escolha == pedra && respc == papel){
            console.log('Papel ganha pedra!');
            resultado = pontopc++;
        } else if(escolha == papel && respc == tesoura){
            console.log('Tesoura ganha papel!');
            resultado = pontopc++;
        } else if(escolha == papel && respc == pedra){
            console.log('Papel ganha pedra!');
            resultado = ponto++;
        } else if(escolha == tesoura && respc == pedra){
            console.log('Pedra ganha tesoura!'); 
            resultado = pontopc++;
        } else if(escolha == tesoura && respc == papel){
            console.log('tesoura ganha papel!');
            resultado = ponto++;
        } else if (escolha == papel && respc == papel){
            console.log('Ninguém pontua!');
        } else if (escolha == pedra && respc == pedra){
            console.log('Ninguém pontua!');
        } else if (escolha == tesoura && respc == tesoura){
            console.log('Ninguém pontua!');
        }
        rodadas -- 
    }
     
    console.log('Você ganhou: '+ponto+' rodada(s) e PC ganhou: '+pontopc+' rodada(s)');
    console.log(); 
    if(ponto > pontopc){
        console.log('Você ganhou, PC perdeu!');
    } else if(pontopc > ponto){
        console.log('PC ganhou, você perdeu!')
    } else if(ponto == pontopc){
        console.log('Ninguém ganhou!')
    }
    console.log(); 
    replay = prompt('Deseja jogar novamente? ')
    if(replay == 'sim'){
        jogo = 1
    } else{
        console.log('Até a próxima!!');
    }

}while(jogo);