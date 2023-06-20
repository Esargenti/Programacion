//GUARDAR DATA


//VALIDACION
const apellido=document.getElementById("apellido")
const matricula=document.getElementById("matricula")
const form=document.getElementById("form")
const parrafo=document.getElementById("warnings")

function contarNumeros(numero) {
    var cadena = numero.toString();
    var cantidadNumeros = cadena.length;
    return cantidadNumeros;
  }

form.addEventListener("submit", e=>{
    let warnings=""
    let entrar=false
    if(apellido.value.length<3){
        warnings+=`El apellido no es válido <br>`
        entrar=true
    }
    if(contarNumeros(matricula.value)<5){
        warnings+=`La matricula no es valida <br>`
        entrar=true
    }

    if(entrar){
        parrafo.innerHTML=warnings
    }

})
