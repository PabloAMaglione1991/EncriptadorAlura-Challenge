var showimg;
const excluidos = /[A-Z\áéíóú]/;

var textIn = document.querySelector("#entrada-de-texto");
var textOut = document.querySelector("#resultado-encriptado");

var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var botonCopiar = document.querySelector("#btn-copiar");

var campo_textresult = document.querySelector(".resultado-salida").style.display = "none";
var campo_btncopy = document.querySelector(".btn-copiar").style.display = "none";

function encriptar (){
	let aux;
	let word = "";
	let texto = textIn.value;

	if(excluidos.test(texto)){
		texto = "";
		alert("No esta permitido usar mayusculas o acentos, ingrese nuevamente su texto");
	}
	if(texto == ""){
		notshowres();
	}else{
		showres();
	}

	for(var i=0; i<texto.length; i++){
		switch (texto.charAt(i)) {
            case 'a':
                aux = "ai";
                break;
            case 'e':
                aux = "enter";
                break;
            case 'i':
                aux = "imes";
                break;
            case 'o':
                aux = "ober";
                break;
            case 'u':
                aux = "ufat";
                break;
            default:
                aux = texto.charAt(i);
                break;
        }
		word = word + aux;
	}
	textOut.value = word;
}

function desencriptar (){
	let aux;
	let word = "";
	let texto = textIn.value;

	if(excluidos.test(texto)){
		texto = "";
		alert("No esta permitido usar mayusculas o acentos, ingrese nuevamente su texto");
	}
	if(texto == ""){
		notshowres();
	}else{
		showres();
	}

	for (let i = 0; i < texto.length; i++) {
        switch (texto.charAt(i)) {
            case 'a':
                aux = i + 1;
                break;
            case 'e':
                aux = i + 4;
                break;
            case 'i':
                aux = i + 3;
                break;
            case 'o':
                aux = i + 3;
                    break;
            case 'u':
                aux = i + 3;
                break;
            default:
                aux = i;
                break;
        }
        word = word + texto.charAt(i);
        i = aux;
    }
    textOut.value = word;
}

function copiar () {
    let textoEncriptado = textOut.value;
    navigator.clipboard.writeText(textoEncriptado);
    alert("Mensaje copiado");
}

function showres() {
    showimg = document.querySelector("#primera-fase").style.display = "none";
    campo_textresult = document.querySelector("#resultado-encriptado").style.display = "block"
    campo_btncopy = document.querySelector(".btn-copiar").style.display = "inline-flex";
}

function notshowres() {
    showimg = document.querySelector("#primera-fase").style.display = "block";
    campo_textresult = document.querySelector("#segunda-fase").style.display = "none"
}

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;