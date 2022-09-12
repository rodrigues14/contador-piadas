const btnPiada = document.querySelector('#btn-piada');

function contarPiada() {

    const areaPiada = document.querySelector('#piada');
    const areaResposta = document.querySelector('#area-resposta');
    
    const piadas = [
        "Por que enviar SPAM é algo justificável?",
        "Que tipo de computador está bombando nas redes sociais?",
        "Por que o mouse é muito mimado?",
        "Qual doença se pode pegar ao usar notebook?",
        "O que uma impressora falou para a outra?",
        "O dono do site esqueceu a própria senha, qual o nome do filme?",
        "Por que antigamente a Internet não subia de elevador?",
        "Como se manda um 'Salve' pra galera do computador?",
        "int x=10; int y=10; return x+y; // Qual o nome do filme?",
        "Qual a música preferida do Sérgio Reis?",
        "Por que os sites de emprego não informam nada?"
    ]

    const respostas = [
        "R: Porque os fins justificam os emails",
        "R: O deskTOP⇧",
        "R: Porque tudo o que ele quer, o mouse pad",
        "R: A LAPTOPspirose",
        "R: Essa folha aí no chão é sua, ou é impressão minha?",
        "R: Esqueceram Admin",
        "R: Porque era Internet de-escada",
        "R: CTRL+S",
        "R: O Código dá Vinte",
        "R: Toda vez que eu via Java pela estrada de Ouro Fino",
        "R: Porque lá as informações são vagas"
    ]
    
    // piada aleatoria
    
    const totalDePiadas = piadas.length;
    const numeroAleatorio = Math.floor(Math.random() * totalDePiadas);
    
    areaPiada.style.opacity = '0';
    areaResposta.style.opacity = '0';

    setTimeout(() => {

        areaPiada.style.opacity = '1';
        areaResposta.style.opacity = '1';
        areaPiada.innerHTML = piadas[numeroAleatorio];
        areaResposta.textContent = respostas[numeroAleatorio];

        if (areaPiada.textContent !== '') {
            btnPiada.textContent = 'Conte-me outra piada!';
        } else {
            btnPiada.textContent = 'Conte-me uma piada';
        }

    }, 400);

}

btnPiada.addEventListener('click', contarPiada);