var botaoEncriptar = document.querySelector(".btn-encriptar");
var botaoDesencriptar = document.querySelector(".btn-desencriptar");
var robo = document.querySelector(".contemrobo");
var contem = document.querySelector(".contem-paragrafo");
var resultado = document.querySelector(".texto-resultado");

botaoEncriptar.onclick = encriptar;
botaoDesencriptar.onclick = desencriptar;

function alterarTema(opcao) {
    var body = document.body;

    if (opcao === 'OS Default') {
        body.classList.remove('light-mode', 'dark-mode');
    } else {
        body.classList.remove('light-mode', 'dark-mode');
        body.classList.add(opcao.toLowerCase() + '-mode');
    }

    salvarModo(opcao.toLowerCase());
}

function encriptar() {
    ocultar();
    var caixadetexto = recuperarTexto();
    resultado.textContent = encriptarTexto(caixadetexto);
}

function desencriptar() {
    ocultar();
    var caixadetexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(caixadetexto);
}

function recuperarTexto() {
    var caixadetexto = document.querySelector(".caixadetexto");
    return caixadetexto.value;
}

function ocultar() {
    robo.classList.add("ocultar");
    contem.classList.add("ocultar");
}

function encriptarTexto(mensagem) {
    var texto = mensagem;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai";
        } else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter";
        } else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes";
        } else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober";
        } else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat";
        } else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensagem) {
    var texto = mensagem;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a";
            i = i + 1;
        } else if (texto[i] == "e") {
            textoFinal = textoFinal + "e";
            i = i + 4;
        } else if (texto[i] == "i") {
            textoFinal = textoFinal + "i";
            i = i + 3;
        } else if (texto[i] == "o") {
            textoFinal = textoFinal + "o";
            i = i + 3;
        } else if (texto[i] == "u") {
            textoFinal = textoFinal + "u";
            i = i + 3;
        } else {
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}

document.addEventListener('DOMContentLoaded', function () {
    const btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.addEventListener("click", () => {
        var contido = document.querySelector(".texto-resultado").textContent;
        navigator.clipboard.writeText(contido);
        console.log("Olá");
    });
});
