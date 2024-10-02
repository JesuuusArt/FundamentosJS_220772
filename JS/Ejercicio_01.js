// EJERCICIO 01 : Declaracion de variables

// a) Var

console.warn("--- Declaracion de variables usando: VAR ---");

var miNombre = "Jesus A."
var misApellidos;
var miEdad = 20;

//El objeto de console nnos permite enviar datos a la terminar y poder visualizar el valor de una variable o resultado de una funcion o metodo
console.log("Intentando leer las variables:", miNombre, misApellidos);

misApellidos = "Artiaga M."

console.log("Ya que ambas fueron inicializadas, vuelvo a intentar leerlas:", miNombre, misApellidos);

//Una variable puede cambiar en el proceso de ejecucion del programa

// b) Const

console.warn("--- Declaracion de variables del tipo CONST ---");

const miUniversidad = "UT Xicotepec";
const miMatricula = 220772;

console.log("Hola,", miNombre, misApellidos, "se que estudias actualmente en la", miUniversidad, "te fue asignada la matricula", miMatricula, "y tienes", miEdad, "años de edad");

// Para saber el tipo de dato que tiene una variable o constante podemos utilizar la funcion typeOf()

console.log("Analizando los datos puedo deducir que: ")
console.log("La variable miNombre es del tipo", typeof(miNombre))
console.log("La variable misApellidos es del tipo", typeof(misApellidos))
console.log("La variable miUniverdidad es del tipo", typeof(miUniversidad))
console.log("La variable miEdad es del tipo", typeof(miEdad))
console.log("La variable miMatricula es del tipo", typeof(miMatricula))

// c) Let

console.warn("--- Declaracion de variables Locales usando LET ---");

let miFechaNacimiento = "2003-11-04";
let miColorFavorito;

console.log("Genial, te voy conociendo mejor, ahora se que tu naciste el:", miFechaNacimiento, "y que tu color favorito es: mmmmmmmmm dejame pensar....");
miColorFavorito = "Verde";

//Interpolar datos, es donde se manda a llamar una variable dentro de una string, usando ${}
console.log(`Creo que es ${miColorFavorito}, le atine?`);

console.log("-------------------")
console.log("Analizando los datos puedo deducir que: ")
console.log("Mi color favorito es del tipo", typeof(miColorFavorito))
console.log("Mi fecha de nacimiento es del tipo", typeof(miFechaNacimiento))

