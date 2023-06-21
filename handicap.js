//GUARDAR DATA


//VALIDACION
const apellido=document.getElementById("apellido")
const matricula=document.getElementById("matricula")
const form=document.getElementById("form")
const parrafo=document.getElementById("warnings")

devuelve = function(id) {
	return document.getElementById(id);
}

var mostrar = function(id) {
	devuelve(id).style.display ='block';
}
var esconder = function(id) {
	devuelve(id).style.display ='none';
	location.reload();
}

function contarNumeros(numero) {
    var cadena = numero.toString();
    var cantidadNumeros = cadena.length;
    return cantidadNumeros;
}

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings=""    
    let entrar=false
    if(apellido.value.length<3){
        warnings+=`El apellido no es válido, debe contener más de 3 letras <br>`
        entrar=true
    }
    if(contarNumeros(matricula.value)!=5){
        warnings+=`La matricula no es valida, debe contener 5 números <br>`
        entrar=true
    }

    if(entrar){
        parrafo.innerHTML=warnings
    } else{
        mostrar("popup")
    }

})
