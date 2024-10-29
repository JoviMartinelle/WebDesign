let valorDisplay = '0';
let valorArmazenado = null;
let operacao = null;

function atualizarDisplay(valor) {
    document.getElementById("display").innerText = valor;
}

function manipularBotao(valor) {
    if (valor >= '0' && valor <= '9') { 
        if (valorDisplay === '0') {
            valorDisplay = valor;
        } else {
            valorDisplay += valor;
        }
    } else if (valor === 'C') { 
        valorDisplay = '0';
        valorArmazenado = null;
        operacao = null;
    } else if (valor === '=') { 
        if (operacao !== null && valorArmazenado !== null) {
            valorDisplay = calcularResultado(parseFloat(valorArmazenado), parseFloat(valorDisplay), operacao).toString();
            valorArmazenado = null;
            operacao = null;
        }
    } else { 
        if (operacao === null) {
            valorArmazenado = valorDisplay;
            valorDisplay = '0';
        }
        operacao = valor;
    }
    atualizarDisplay(valorDisplay);
}

function calcularResultado(valor1, valor2, operador) {
    let resultado;
    switch (operador) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            resultado = valor2 !== 0 ? valor1 / valor2 : "Erro";
            break;
        default:
            resultado = 0;
            break;
    }
    return resultado;
}

const botoes = document.querySelectorAll(".botoes button");
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function() {
        manipularBotao(botoes[i].innerText);
    };
}
