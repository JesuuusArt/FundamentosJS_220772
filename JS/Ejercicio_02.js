// ? TIPOS DE DATOS EN JS

// ? 1. Undefined
// ? Undefined es el tipo de dato por defecto que se asigna a variables no inicializadas o no declaradas.

console.warn("--- Tipo de dato Undefined ---");

let cliente;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable "cliente" es: ${typeof(cliente)}`);

cliente = "Juan Martinez";
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable "cliente" es: ${typeof(cliente)}`);

cliente = 1234;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable "cliente" es: ${typeof(cliente)}`);

// ? 2. Boolean

console.warn("--- Tipo de dato Boolean (Boleano - true/false) ---");

let esPremium = "No lo sé";
console.log(`¿Es el cliente premium? ${esPremium}`);
console.log(`El tipo de dato de la variable "esPremium" es: ${typeof(esPremium)}`);

console.log(`---------------`);
console.log(`Asignando el valor "true" para que sea string`);
esPremium = "true";
console.log(`¿Es el cliente premium? ${esPremium}`);
console.log(`El tipo de dato de la variable "esPremium" es: ${typeof(esPremium)}`);

console.log(`---------------`);
console.log(`Asignando el valor true para que sea boolean`);
esPremium = true;
console.log(`¿Es el cliente premium? ${esPremium}`);
console.log(`El tipo de dato de la variable "esPremium" es: ${typeof(esPremium)}`);
if (esPremium)
    console.log("El cliente pagó por usar el servicio.");
else
    console.log("El cliente recibe los servicios gratuitos.");

console.log(`---------------`);
console.log(`Asignando el valor false para que sea boolean`);
esPremium = false;
console.log(`¿Es el cliente premium? ${esPremium}`);
console.log(`El tipo de dato de la variable "esPremium" es: ${typeof(esPremium)}`);

if (esPremium)
    console.log("El cliente pagó por usar el servicio.");
else
    console.log("El cliente recibe los servicios gratuitos.");

// ? 3. Number
console.warn("--- Tipo de dato Number (Números positivos, negativos, decimales, flotantes) ---");

var cantidad;
const costo_producto = 10.50; 
let saldo_cuenta = -2500.40;
let monto_transaccion;

console.log(`Tu saldo al día de hoy es de: ${saldo_cuenta}, (Tipo de dato: ${typeof(saldo_cuenta)})`);

console.log(`El producto que has seleccionado cuesta: ${costo_producto}`);
cantidad = 10;
console.log(`Has elegido comprar: ${cantidad} productos.`);
console.log(`El importe total de la compra es de: ${(cantidad * costo_producto)}`);
saldo_cuenta = saldo_cuenta - (cantidad * costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);
// ? El cliente realiza un abono de 1500
monto_transaccion = 1500;
console.log(`Tu abono de: ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${(saldo_cuenta + monto_transaccion)}`);

// ? 4. Strings o cadenas de texto
console.warn("--- Tipo de dato - STRING (Cadena de caracteres) ---");

const alumno = "Jesus Artiaga";
let producto = "Monitor 20 pulgadas";
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof alumno}`);
producto = "Monitor 20 pulgadas"; // corregido "Monitos"
console.log(`El nombre del producto es: ${producto}, que es un tipo de dato ${typeof producto}`);
console.log("----------");

// ? Manipulando los strings
console.log(`Más adelante podremos transformar el contenido de los STRINGS usando funciones específicas como convertir a mayúsculas: ${alumno} => ${alumno.toUpperCase()}`);
console.log(`O en su defecto a minúsculas: ${producto} => ${producto.toLowerCase()}`);
console.log("----------");

const numero = "20";
const numero2 = 20;

console.log(`La variable "numero" es del tipo ${typeof numero}`);
console.log(`La variable "numero2" es del tipo ${typeof numero2}`);

// ? 5. Big Int
console.warn("--- Tipo de dato - BigInt (Enteros de Dimensiones Amplias) - Generalmente utilizado en sistemas matemáticos, físicos o espaciales donde se requiere una excelente precisión numérica.");

const numeroGrande = 1234567890;
const numeroGrande2 = 12345678901234567890;
let numeroGrande3 = 1234567890123456789012345678901234567890;
let numeroGrande4 = 12345678901234567890123456789012345678901234567890;

console.log(`El primer experimento de un número grande es: ${numeroGrande}, que sí es soportado por NUMBER y su tipo de dato es: ${typeof(numeroGrande)}`);
console.log(`El segundo experimento de un número grande es: ${numeroGrande2}, que sí es soportado por NUMBER y su tipo de dato es: ${typeof(numeroGrande2)}`);

// ? Para definir el tipo de dato BigInt debemos invocar la función BigInt o usar una letra "n" al final del número en la asignación de valor.
console.error("-- Declaramos los valores numéricos a gran tamaño --");

numeroGrande3 = BigInt(10000000000000000000);
numeroGrande4 = 100000000000000000n;

console.log(`El tercer experimento de un número grande es: ${numeroGrande3}, que ya no es soportado por NUMBER y su tipo de dato es: ${typeof(numeroGrande3)}`);
console.log(`El cuarto experimento de un número grande es: ${numeroGrande4}, que ya no es soportado por NUMBER y su tipo de dato es: ${typeof(numeroGrande4)}`);

// ? Hay que considerar que los tipos de datos declarados BigInt no son operables con los tipos number.
let numero3 = 200;

console.log(`El resultado de la operación de: numeroGrande4 / numero es = a ${numeroGrande4 / BigInt(numero3)}`);
// ? Si intentamos realizar una operación automática entre estos 2 tipos de datos, obtendremos un error crítico en la operación.

// ? 6. Symbol
console.warn("--- Tipo de dato - Symbol (Símbolo o forzar la unicidad) ---");

// ? Declaramos diferentes variables con valores similares o iguales?
const Simbolo = 2;
const Simbolo2 = 2.0;
const Simbolo3 = "2";
const Simbolo4 = "2.0";
const Simbolo5 = Symbol(2);
const Simbolo6 = Symbol(2.0);
const Simbolo7 = Symbol("2");
const Simbolo8 = Symbol("2.0");
const Simbolo9 = Symbol(2);

/*
= Asignación
== Igualdad de valor
=== Igualdad estricta, compara valor y tipo de dato
*/

console.log("Prueba de comparación 1: ¿es 2 = a 2.0?");
if (Simbolo == Simbolo2)
    console.log(`Se han comparado los valores de: Simbolo y Simbolo2, confirmando que tienen el mismo valor`);
else
    console.log(`Se han comparado los valores de: Simbolo y Simbolo2, negando que tienen el mismo valor`);
console.log("------");

console.log(`Prueba de comparación 2: ¿es 2 = a "2"?`);
if (Simbolo == Simbolo3)
    console.log(`Se han comparado los valores de: Simbolo y Simbolo3, confirmando que tienen el mismo valor`);
else
    console.log(`Se han comparado los valores de: Simbolo y Simbolo3, negando que tienen el mismo valor`);
console.log("------");

console.log(`Prueba de comparación 3: ¿es 2 === a "2"?`);
if (Simbolo === Simbolo3)
    console.log(`Se han comparado los valores de: Simbolo y Simbolo3, confirmando que tienen el mismo valor`);
else
    console.log(`Se han comparado los valores de: Simbolo y Simbolo3, negando que tienen el mismo valor`);
console.log("------");

console.log(`Prueba de comparación 4: ¿es 2 = a "2.0"?`);
if (Simbolo == Simbolo4)
    console.log(`Se han comparado los valores de: Simbolo y Simbolo4, confirmando que tienen el mismo valor`);
else
    console.log(`Se han comparado los valores de: Simbolo y Simbolo4, negando que tienen el mismo valor`);
console.log("------");

console.log(`Prueba de comparación 5: ¿es 2 === a "2.0"?`);
if (Simbolo === Simbolo4)
    console.log(`Se han comparado los valores de: Simbolo y Simbolo4, confirmando que tienen el mismo valor`);
else
    console.log(`Se han comparado los valores de: Simbolo y Simbolo4, negando que tienen el mismo valor`);
console.log("------");

console.log("Prueba de comparación 6: ¿es 2 == a Symbol(2)?");
if (Simbolo == Simbolo5)
    console.log(`Se han comparado los valores de: Simbolo y Simbolo5, confirmando que tienen el mismo valor`);
else
    console.log(`Se han comparado los valores de: Simbolo y Simbolo5, negando que tienen el mismo valor`);
console.log("------");

console.log("Prueba de comparación 7: ¿es 2 === a Symbol(2)?");
if (Simbolo === Simbolo5)
    console.log(`Se han comparado los valores de: Simbolo y Simbolo5, confirmando que tienen el mismo valor`);
else
    console.log(`Se han comparado los valores de: Simbolo y Simbolo5, negando que tienen el mismo valor`);
console.log("------");

console.log("Prueba de comparación 8: ¿es Symbol(2) == Symbol(2)?");
if (Simbolo5 == Simbolo9)
    console.log(`Se han comparado los valores de: Simbolo5 y Simbolo9, confirmando que tienen el mismo valor`);
else
    console.log(`Se han comparado los valores de: Simbolo5 y Simbolo9, negando que tienen el mismo valor`);
console.log("------");

console.log("Prueba de comparación 9: ¿es Symbol(2) === Symbol(2)?");
if (Simbolo5 === Simbolo9)
    console.log(`Se han comparado los valores de: Simbolo5 y Simbolo9, confirmando que tienen el mismo valor`);
else
    console.log(`Se han comparado los valores de: Simbolo5 y Simbolo9, negando que tienen el mismo valor`);
console.log("------");

// ? 7. Null
console.warn("--- Tipo de dato - NULL (Nulo) ---");

const valorNulo = null;
console.log(`El valor nulo tiene un tipo de dato: ${typeof valorNulo}`);
