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
