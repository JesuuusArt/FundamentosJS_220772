// ? EJERCICIO 01: Declaración de variables

// ? a) Var
console.warn("--- Declaración de variables usando: VAR ---");

var miNombre = "Jesus A."; // ? Inicializando la variable miNombre
var misApellidos; // ? Declarando la variable misApellidos
var miEdad = 20; // ? Inicializando la variable miEdad

// ? El objeto de console nos permite enviar datos a la terminal y poder visualizar el valor de una variable o resultado de una función o método
console.log("Intentando leer las variables:", miNombre, misApellidos);

misApellidos = "Artiaga M."; // ? Inicializando misApellidos

console.log("Ya que ambas fueron inicializadas, vuelvo a intentar leerlas:", miNombre, misApellidos);

// ? Una variable puede cambiar en el proceso de ejecución del programa

// ? b) Const
console.warn("--- Declaración de variables del tipo CONST ---");

const miUniversidad = "UT Xicotepec"; // ? Inicializando la constante miUniversidad
const miMatricula = 220772; // ? Inicializando la constante miMatricula

console.log("Hola,", miNombre, misApellidos, "sé que estudias actualmente en la", miUniversidad, "te fue asignada la matrícula", miMatricula, "y tienes", miEdad, "años de edad");

// ? Para saber el tipo de dato que tiene una variable o constante podemos utilizar la función typeOf()
console.log("Analizando los datos puedo deducir que: ");
console.log("La variable miNombre es del tipo", typeof(miNombre)); // ? Mostrando el tipo de dato de miNombre
console.log("La variable misApellidos es del tipo", typeof(misApellidos)); // ? Mostrando el tipo de dato de misApellidos
console.log("La variable miUniversidad es del tipo", typeof(miUniversidad)); // ? Mostrando el tipo de dato de miUniversidad
console.log("La variable miEdad es del tipo", typeof(miEdad)); // ? Mostrando el tipo de dato de miEdad
console.log("La variable miMatricula es del tipo", typeof(miMatricula)); // ? Mostrando el tipo de dato de miMatricula

// ? c) Let
console.warn("--- Declaración de variables locales usando LET ---");

let miFechaNacimiento = "2003-11-04"; // ? Inicializando la variable miFechaNacimiento
let miColorFavorito; // ? Declarando la variable miColorFavorito

console.log("Genial, te voy conociendo mejor, ahora sé que tú naciste el:", miFechaNacimiento, "y que tu color favorito es: mmmmmmmmm déjame pensar....");
miColorFavorito = "Verde"; // ? Inicializando miColorFavorito

// ? Interpolar datos, es donde se manda a llamar una variable dentro de una string, usando ${}
console.log(`Creo que es ${miColorFavorito}, ¿le atiné?`);

console.log("-------------------");
console.log("Analizando los datos puedo deducir que: ");
console.log("Mi color favorito es del tipo", typeof(miColorFavorito)); // ? Mostrando el tipo de dato de miColorFavorito
console.log("Mi fecha de nacimiento es del tipo", typeof(miFechaNacimiento)); // ? Mostrando el tipo de dato de miFechaNacimiento
