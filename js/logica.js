// Elementos del documento
let entradaTexto;
let contenedorRespuesta = document.querySelector(".respuesta");
let contenedorTextoConvertido = document.querySelector(".respuesta-texto");
let respuestaConvertida = document.querySelector(".texto-respuesta");


let encriptar = (entrada)=>{
    // Reemplazar según la encriptación
    let textoEncriptado = entrada
                                .replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");
    return textoEncriptado;
}

let desencriptar = (entrada)=>{
    // Reemplazar según la encriptación
    let textoEncriptado = entrada
                                .replace(/enter/g, "e")
                                .replace(/imes/g, "i")
                                .replace(/ai/g, "a")
                                .replace(/ober/g, "o")
                                .replace(/ufat/g, "u");
    return textoEncriptado;
}

let aparecerTextoConvertido = ()=>{
    contenedorRespuesta.style.display = "none";
    contenedorTextoConvertido.style.display = "";

}

let ocultarTextoConvertido = ()=>{
    contenedorRespuesta.style.display = "";
    contenedorTextoConvertido.style.display = "none";
}

let botonEncriptar = ()=>{
    entradaTexto = document.getElementById("entradaTexto").value;
    // si el texto de entrada es vacío
    if(entradaTexto.trim() === ""){
        ocultarTextoConvertido();
    } else{
        // si el texto de entrada contiene algo
        respuestaConvertida.value = encriptar(entradaTexto);
        aparecerTextoConvertido();
    }
}

let botonDesencriptar = ()=>{
    entradaTexto = document.getElementById("entradaTexto").value;
    // si el texto de entrada es vacío
    if(entradaTexto.trim() === ""){
        ocultarTextoConvertido();
    } else{
        // si el texto de entrada contiene algo
        respuestaConvertida.value = desencriptar(entradaTexto);
        aparecerTextoConvertido();
    }   
}