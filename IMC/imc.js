
const calcular = document.getElementById ('calcular');


function imc () {
    const nome = document.getElementById ('nome').value;
    const altura = document.getElementById ('altura').value;
    const peso = document.getElementById ('peso').value;
    const resultado = document.getElementById ('resultado');

    if (nome !== '' && altura !== '' && peso !== '' ){

        const ValorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (ValorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (ValorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        } else if (ValorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (ValorIMC < 35) {
            classificacao = 'com obesidade grau I.';
        } else if (ValorIMC < 40) {
            classificacao = 'com obesidade grau II.';
        } else if (ValorIMC < 45) {
            classificacao = 'com obesidade grau III. Cuidado!';
        }
        resultado.textContent = `${nome} seu IMC é ${ValorIMC} e você está ${classificacao}`;

    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }
}

calcular.addEventListener('click', imc);
