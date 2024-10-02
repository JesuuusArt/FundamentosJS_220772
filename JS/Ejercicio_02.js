// Tipos de Datos en JS

// 1. Undefined
//Undefined es el tipo de dato por defecto que se asigna a variables no inicializadas o no declaradas

console.warn("--- Tipo de dato Undefined ---")

let cliente;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable "cliente" es: ${typeof(cliente)}`);

cliente = "Juan Martinez"
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable "cliente" es: ${typeof(cliente)}`);

cliente = 1234
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable "cliente" es: ${typeof(cliente)}`);

// 2. Boolean

console.warn("--- Tipo de dato Boolean (Boleano - true/false) ---")

let esPremium = "No lo se";
console.log(`¿Es el cliente premium? ${esPremium}`);
console.log(`El tipo de dato de la variable "esPremium" es: ${typeof(esPremium)}`);

console.log(`---------------`);
console.log(`Asignando el valor "true" para que sea string`)
esPremium = "true";
console.log(`¿Es el cliente premium? ${esPremium}`);
console.log(`El tipo de dato de la variable "esPremium" es: ${typeof(esPremium)}`);

console.log(`---------------`);
console.log(`Asignando el valor true para que sea boolean`)
esPremium = true;
console.log(`¿Es el cliente premium? ${esPremium}`);
console.log(`El tipo de dato de la variable "esPremium" es: ${typeof(esPremium)}`);
if(esPremium)
    console.log("El cliente pago por usar el servicio.");
else
    console.log("El cliente recibe los servicios gratuitos")

    console.log(`---------------`);
    console.log(`Asignando el valor false para que sea boolean`)
    esPremium = false;
    console.log(`¿Es el cliente premium? ${esPremium}`);
    console.log(`El tipo de dato de la variable "esPremium" es: ${typeof(esPremium)}`);
    
    if(esPremium)
        console.log("El cliente pago por usar el servicio.");
    else
        console.log("El cliente recibe los servicios gratuitos")

// 3. Number
console.warn("--- Tipo de dato Number (Numeros positivos, negativos, decimales, flotantes) ---")

var cantidad;
const costo_producto = 10.50; 
let saldo_cuenta = -2500.40;
let monto_transaccion;

console.log(`Tu saldo al dia de hoy es de:${saldo_cuenta}, (Tipo de dato: ${typeof(saldo_cuenta)})`);

console.log(`El producto que has seleccionado cuesta: ${costo_producto}`)
cantidad = 10;
console.log(`Has elegido comprar: ${cantidad} productos.`)
console.log(`El importe total de la compra es de: ${(cantidad*costo_producto)}`)
saldo_cuenta = saldo_cuenta - (cantidad*costo_producto)
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`)
//El cliente raliza un abono de 1500
monto_transaccion = 1500;
console.log(`Tu abono de: ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${(saldo_cuenta+monto_transaccion)}`)

// 4. Strings o cadenas de texto
console.warn("--- Tipo de dato -  STRING(Cadena de caracteres) ---")

const alumno = "Jesus Artiaga"
let producto = "Monitor 20 pulgadas"
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof alumno}`)
producto = "Monitos 20 pulgadas"
console.log(`El nombre del producto es: ${producto}, que es un tipo de dato ${typeof producto}`)
console.log("----------")

//Manipulando los strings
console.log(`Mas adelante podremos transformar el contenido de los STRINGS usando funciones especificas como convertir a mayusculas: ${alumno} => ${alumno.toUpperCase()}`)
console.log(`O en su defecto a minusculas: ${producto} => ${producto.toLowerCase()}`)
console.log("----------")

const numero = "20"
const numero2 = 20

console.log(`La variable "numero" es del tipo ${typeof numero}`)
console.log(`La variable "numero2" es del tipo ${typeof numero2}`)

// 5. Big Int
console.warn("--- Tipo de dato -  BigInt(Enteros de Dimensiones Amplias) - Generalmente utilizado en sistemas matematicos, fisicos o espaciales donde se requiere una excelente precision numerica")

const numeroGrande = 1234567890
const numeroGrande2 = 12345678901234567890
let numeroGrande3 = 1234567890123456789012345678901234567890
let numeroGrande4 = 12345678901234567890123456789012345678901234567890

console.log(`El primer experimento de un numero grande es: ${numeroGrande}, que si es soportado por NUMBER y su tipo de dato es: ${typeof(numeroGrande)}`)
console.log(`El segundo experimento de un numero grande es: ${numeroGrande2}, que si es soportado por NUMBER y su tipo de dato es: ${typeof(numeroGrande2)}`)

//Para definir el tipo de dato BigInt debemos invocar la funcion BigInt o usar una letra "n" al final del numero en la asignacion de valor
console.error("-- Declaramos los valores numericos a gran tamaño --")

numeroGrande3 = BigInt(10000000000000000000)
numeroGrande4 = 100000000000000000n

console.log(`El tercer experimento de un numero grande es: ${numeroGrande3}, que ya no es soportado por NUMBER y su tipo de dato es: ${typeof(numeroGrande3)}`)
console.log(`El cuarto experimento de un numero grande es: ${numeroGrande4}, que ya no es soportado por NUMBER y su tipo de dato es: ${typeof(numeroGrande4)}`)

//Hay que considerar que los tipos de datos declarados BigInt no son operables con los tipos number
let numero3 = 200

console.log(`El resultado de la operacion de: numeroGrande4 / numero es = a ${numeroGrande4 / BigInt(numero3)}`)
//Si intentamos realizar una operacion automatica entre estos 2 tipos de datos, obtendremos un error critico en la operacion

// 6. Symbol
console.warn("--- Tipo de dato -  Symbol(Simbolo o forzar la unicidad) ---")

//Declaramos diferentes variables con valores similares o iguales?
const Simbolo = 2
const Simbolo2 = 2.0
const Simbolo3 = "2"
const Simbolo4 = "2.0"
const Simbolo5 = Symbol(2)
const Simbolo6 = Symbol(2.0)
const Simbolo7 = Symbol("2")
const Simbolo8 = Symbol("2.0")
const Simbolo9 = Symbol(2)

/*
= Asignacion
== Igualdad de valor
=== Igualdad estricta, compara valor y tipo de dato
*/

console.log("Prueba de comparacion 1: ¿es 2 = a 2.0")
if(Simbolo == Simbolo2)
    console.log(`Se han comparado los valores de: Simbolo y Simbolo2, confirmando que tienen el mismo valor`)
else
    console.log(`Se han comparado los valores de: Simbolo y Simbolo2, negando que tienen el mismo valor`)
console.log("------")

console.log(`Prueba de comparacion 2: ¿es 2 = a "2"?`)
if(Simbolo == Simbolo3)
    console.log(`Se han comparado los valores de: Simbolo y Simbolo3, confirmando que tienen el mismo valor`)
else
    console.log(`Se han comparado los valores de: Simbolo y Simbolo3, negando que tienen el mismo valor`)
console.log("------")

console.log(`Prueba de comparacion 3: ¿es 2 === a "2"?`)
if(Simbolo === Simbolo3)
    console.log(`Se han comparado los valores de: Simbolo y Simbolo3, confirmando que tienen el mismo valor`)
else
    console.log(`Se han comparado los valores de: Simbolo y Simbolo3, negando que tienen el mismo valor`)
console.log("------")

console.log(`Prueba de comparacion 4: ¿es 2 = a "2.0"?`)
if(Simbolo == Simbolo4)
    console.log(`Se han comparado los valores de: Simbolo y Simbolo4, confirmando que tienen el mismo valor`)
else
    console.log(`Se han comparado los valores de: Simbolo y Simbolo4, negando que tienen el mismo valor`)
console.log("------")

console.log(`Prueba de comparacion 5: ¿es 2 === a "2.0"?`)
if(Simbolo === Simbolo4)
    console.log(`Se han comparado los valores de: Simbolo y Simbolo4, confirmando que tienen el mismo valor`)
else
    console.log(`Se han comparado los valores de: Simbolo y Simbolo4, negando que tienen el mismo valor`)
console.log("------")

console.log("Prueba de comparacion 6: ¿es 2 == a Symbol(2)?")
if(Simbolo == Simbolo5)
    console.log(`Se han comparado los valores de: Simbolo y Simbolo5, confirmando que tienen el mismo valor`)
else
    console.log(`Se han comparado los valores de: Simbolo y Simbolo5, negando que tienen el mismo valor`)
console.log("------")

console.log("Prueba de comparacion 7: ¿es Symbol(2) == a Symbol(2.0)?")
if(Simbolo5 == Simbolo6)
    console.log(`Se han comparado los valores de: Simbolo5 y Simbolo6, confirmando que tienen el mismo valor`)
else
    console.log(`Se han comparado los valores de: Simbolo5 y Simbolo6, negando que tienen el mismo valor`) 
console.log("------") 

console.log("Prueba de comparacion estricta 8: ¿es Symbol(2) === a Symbol(2)?")
if(Simbolo5 === Simbolo9)
    console.log(`Se han comparado los valores de: Simbolo5 y Simbolo9, confirmando que tienen el mismo valor`)
else
    console.log(`Se han comparado los valores de: Simbolo5 y Simbolo9, negando que tienen el mismo valor`)    
console.log("------")  

// 7. Null
console.warn("--- Tipo de dato -  Null(Nulo o vacio) ---")

//El tipo de dato nulo se asigna cuando el sistema o el usuario saben de la variable pero prefieren dejarlo vacio, bajo su consentimiento
//A diferencia del UNDEFINED, que es un valor desconocido asignado por DEFAULT por JS

let nombreUsuario = null
let passUsuario = null
let generoUsuaro = null
let estatusRelacionSentimental
let fechaUltimoPost

/*Supongamos que estamos programando una red social, tipo facebook, en la que parte de la informacion se publicara en el perfil del usuario
Si el usuario no ha iniciado sesion en el dispositivo movil o en la aplicacion web, puede explorar contenido de acceso publico y no existira informacion para mostrar
En la HU (Historia de Usuario), que el usuario deseara loguearse deberia ingresar su numero telefonico o correo electronico y una contraseña que deberemos guardar en
las variables previamente declaradas.
Supongamos que el usuario: JesusArt, con correo electronico jesusartiaga.chucho@gmail.com desea ingresar con su contraseña: pass123456*/

nombreUsuario = "jesusartiaga.chucho@gmail.com"
passUsuario = "pass123456"

/*En este momento de ejecucion del sistema no sabemos su genero, ni estatus de relacion sentimental */

console.log(`El usuario: ${nombreUsuario} esta intentando loguearse con una contraseña de: ${passUsuario}`)

/*Lo que prosigue es que si el sistema contejara los datos ingresados con la base de datos y en caso de que los datos sean correctos 
comenzara la sesion en la plataforma actualizando los valores
Dado que Jesus es del genero Masclino, y que su estatus de relacion no ha sido capturado o lo mantiene privado, esto puede generar la actualizacion de los
valores de las variables*/

generoUsuaro = "M"
estatusRelacionSentimental = null

console.log(`El usuario ${nombreUsuario}, se ha logueado exitosamente, al tener acceso a su informacion de perfil podemos deducir que es el genero: ${generoUsuaro} y que su estatus de relacion es: ${estatusRelacionSentimental} y su ultima publicacion la realizo el: ${fechaUltimoPost}`)

/*Comparando NULL vs UNDEFINED
Si bien UNDEFINED y NULL tienen el mismo valor, no tienen el mismo tipo de dato */

console.log("Comparación de la equidad entre Undefined y Null:");
(fechaUltimoPost == estatusRelacionSentimental) ?
    console.log("Ambas variables tienen el mismo valor") :
    console.log("Las variables no tienen el mismo valor");


console.log("Comparacion de la identidad entre Undefined y Null:");
(fechaUltimoPost === estatusRelacionSentimental) ?
    console.log("Ambas variables tienen el mismo valor y el mismo tipo de dato") :
    console.log("Las variables tienen el mismo valor, pero no el mismo tipo de dato");

// 8. FUNCTION (Funciones)
console.warn("--- Tipo de dato -  Function (Funciones) ---")

//Declaramos una funcion que nos permita recibir un parametro en este caso el nombre de la persona a saludar, y le enviamos un saludo, esta funcion la asignamos a una constante.
const saludar = function(nombre){return `Hola ${nombre}!`}

//Invocar la funcion declarada
console.log(saludar(`Jesus`))

//Y que tipo de dato tiene esta constante
console.log(`El tipo de dato de la constante saludar es: ${typeof(saludar)}`)