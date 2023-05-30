var textArea = document.querySelector(".texto_sec1");
var mensaje = document.querySelector(".resultado");
var copia = document.querySelector(".boton_copiar");
var parrafo = document.querySelector(".Mensaje_parrafo")
copia.style.display = "none"


function validarDatos() {

let textoEscrito = document.querySelector(".texto_sec1").value
let validador = textoEscrito.match(/^[a-z]*$/);

if(!validador || validador === 0) {
    alert("Solo son permitidas letras minúsculas y sin acentos")
    location.reload();
    return true;
 }

}

function boton_encriptar() {

    if(!validarDatos()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        copia.style.display = "block"
    
    }
    
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}

function boton_desencriptar(){
    ocultarAdelante();
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}


function ocultarAdelante(){

    parrafo.classList.add("ocultar");
}
