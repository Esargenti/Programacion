let array1=[1,2,3]
console.log(array1)
console.log(array1[0])

//metodos de array
//POP: Elimina el ulimo elemento

array1.pop()
console.log(array1) //[1,2]

//PUSH: le agrego un elemento al array
array1.push(3.14)
console.log(array1) //[1,2,3.14]

//SHIFT: Elimina el primer elemento del array
//UNSHIFT: agrega un elemento al principio del array

//tipo de dato undefined: el valor no fue definido

//Map: crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos


//Reduce: funcion reductora

//indexOf
console.log(array1.indexOf(3.14));

//reverse: da vuelta el array --> OJO! Luego del reverse, el array original deja de funcionar

//-------------------------------//

let perro={
    nombre:"Scott",
    color:"Cafe",
    edad:5,
}

console.log(perro.nombre)  // las propiedades llevan parentesis antes, los métodos no!!!

let userStr={}

//funciones declaradas o funciones expresadas

/*function name(params){

}*/
function sumar(){
    console.log(1+2)
}

//invocada
sumar()

function saludar(nombre){
    console.log("Hola"+ nombre)
}

saludar("Emilia")

//
function  saludar_con_parametros(nombre){
    return ("Hola"+ nombre)
}

// while
while(a>1){
    console.log(2); console.log(b)
}

//for
for(let x=0; x<10; x++){
    console.log(x)
}

//1. Tomar un valor que ingresa el usuario
// crear variable
let edad=0

//asginarle a la variable un valor que ingrese el usuario
edad=document.getElementById("age").value

//2. Almacenarlo en la computadora

localStorage.setItem("edad_usuario",edad);
localStorage.getItem("edad_usuario")
//borrar todo lo que tengo
localStorage.clear()
//borrar uno solo de los datos
localStorage.removeItem("edad_usuario")
