//Objetos
const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

console.warn("Practica 5 - Repaso de Objetos en Java Script")
console.log('%c1. Variables Independientes', style_console)

let Producto_Nombre = "Celular Oppo Reno 12"
let Producto_Marca = "Oppo"
let Producto_Modelo = "Reno 12"
let Producto_Precio=  12000
let Producto_Disponible = true
let Producto_Sku = Symbol("12345")
let Producto_Stock = 10
let Producto_Imagen = null
let Producto_Barcode;
let Producto_Categorias = ["Telefonia", "Gamma Alta", "Fotografia", "Electronicos", "Gamer", "Nuevo Lanzamiento"]

//Accedemos a los valores de las caracteristicas del producto de manera independiente
console.log(`Los datos del PRODUCTO son: 
    Nombre: ${Producto_Nombre}, Tipo de Dato: ${typeof(Producto_Nombre)}
    Marca: ${Producto_Marca}, Tipo de Dato: ${typeof(Producto_Marca)}
    Modelo: ${Producto_Modelo}, Tipo de Dato: ${typeof(Producto_Modelo)}
    Precio: ${Producto_Precio}, Tipo de Dato: ${typeof(Producto_Precio)}
    Disponible: ${Producto_Disponible}, Tipo de Dato: ${typeof(Producto_Disponible)}
    Stock: ${Producto_Stock}, Tipo de Dato: ${typeof(Producto_Stock)}
    Imagen: ${Producto_Imagen}, Tipo de Dato: ${typeof(Producto_Imagen)}
    Categorias: ${Producto_Categorias}, Tipo de Dato: ${typeof(Producto_Categorias)}`);    

console.log("En el caso del SKU anterior, no se puede concatenar a la cadena de la impresion anterior")
console.log(Producto_Sku)
console.log(typeof(Producto_Sku))

console.log('%c2. Objeto', style_console)
//Ahora se declara como un OBJETO
const producto = {
    ID: 162,
    Producto_Nombre: "Celular Oppo Reno 12",
    Producto_Marca: "Oppo",
    Producto_Modelo: "Reno 12",
    Producto_Precio: 12000,
    Producto_Disponible: true,
    Producto_Sku: Symbol("12345"),
    Producto_Stock: 10,
    Producto_Imagen: null,
    Producto_Barcode: null,
    Producto_Categorias:["Telefonia", " Gamma Alta", " Fotografia", " Electronicos", " Gamer", " Nuevo Lanzamiento"]
}

console.warn("--- Ahora el mismo producto como un OBJETO ---")
//Imprimir el objeto
console.log(producto)
console.table(producto)

//Acceder a las propiedades de un objeto
console.warn("Leyendo las propiedades especificas del objeto.")  
console.log(`Nombre del producto: ${producto.Producto_Nombre}`)
console.log(`Nombre de la marca: ${producto.Producto_Marca}`)
console.log(`Nombre del modelo: ${producto.Producto_Modelo}`)
console.log(`Precio del producto: ${producto.Producto_Precio}`)
if(producto.Producto_Disponible == 0){
    console.log(`Estatus: Agotado`)
}else{
    console.log(`Estatus: ${Producto_Stock} unidades disponibles.`)
}


//Destructuracion
console.log('%c3. Destructuracion', style_console)

let Producto2 = {
    Clave: 285,
    Nombre: "iPhone 14",
    Marca: "Apple",
    Modelo: 14,
    Precio: 10500,
    Disponibilidad: true,
    Stock: 200,
    SKU: "AP-IPHONE-14",
    Imagen: "../Assets/iphonee14.jpg",
    Barcode: "194253244962",
    Categorias: ["Electrónica", "Teléfonia", "Fotografia", "iPhone", "Rendimiento"]
}

let Comprador = {
    ID: 123, 
    Clave: 772,
    Nombres: "Jesus Alejandor",
    Apellidos: "Artiaga Morales",
    Tipo: "Premium",
    Correo: "jesusartiaga.chucho@gmail.com",
    PaisOrigen: "Mexico",
    SaldoActual: 100000.00
}

let Pedido = {
    ID: 651,
    Producto_ID: 285,
    Comprador_ID: 772,
    Cantidad: 3,
    Estatus: "Carrito de Compra",
    TipoPago: "Efectivo"
}

//En base a los 3 objetos necesitamos calcular el casto de compra y si le alcanza con sus saldo a favor

let {Precio: Producto_Precio2} = Producto2
let {Cantidad: Pedido_Cantidad} = Pedido
let {SaldoActual: Cliente_SaldoActual} = Comprador
let Costo_Compra = Producto_Precio2 * Pedido_Cantidad

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de: ${Costo_Compra}`)
if(Costo_Compra < Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente")

console.log('%c4. Modificacion de los valores de las propiedades de un Objeto', style_console)

console.log(`El objeto actualmente tiene los siguientes valores`)
console.log(JSON.stringify(Producto2, null, 2)) //stringify encadena lo que se imprime

//Convierte el objeto a una cadena para evitar problemas con la referencia
console.log(`Por cuestiones de inflacion el costo del producto ha cambiado y debe ser actualizado... de $6,829.00 a $6,915.50`)

//Para podificar el valor de un objeto basta con igualar el nuevo valor de la propiedad deseada
Producto2.Precio = 15000
console.log("Los nuevos valoress del producto son: ")
console.log(Producto2)

// ¿Puedo cambiar no solo el valor, sino el tipo de dato de un Objeto en JavaScript?
console.log("----------------------------------------------------")
console.warn("Intentando cambiar el tipo de dato de una propiedad en un Objeto")

console.log(`El objeto actualmente tiene los siguientes valores: `)
let tipoDisponibilidad = typeof(Producto2.Disponibilidad)
console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`)
console.log(JSON.stringify(Producto2, null, 2)) //Disponibilidad booleano
Producto2.Disponibilidad = "Si"
let nuevoTipoDisponbilidad = typeof(Producto2.Disponibilidad)
console.log(Producto2)
console.log(`El nuevo tipo de dato de la disponibilidad es: ${nuevoTipoDisponbilidad}`)
// Si!!

console.log('%c5. Agregacion de propiedades de un Objeto (MUTACION)', style_console)
console.log(`Objeto antes de ser modificado: `)
console.table(Comprador)

//Agregando propiedades
Comprador[`Direccion`] = "Calle. Nezahualcoyotl s/n, Col. Los Alpes, Necaxa, Juan Galindo, Puebla, Mexico"
Comprador[`Tipo`] = "Premium"
Comprador[`Estatus`] = "Activo"
Comprador[`TotalCompras`] = 50000.00

console.log(`Objeto modificado: `)
console.table(Comprador)

console.log('%c6. Eliminacion de propiedades de un Objeto (MUTACION)', style_console)
console.log(`Objeto antes de ser modificado: `)
console.table(Pedido)
//Eliminamos la propiedad de TipoPago de Pedido
delete Pedido.TipoPago

console.log(`Objeto modificado: `)
console.table(Pedido)

console.log('%c7. Metodos para controlar la mutabilidad de los Objetos, Congelacion(FREEZE)', style_console)
//Si deseamos no permitir que los objetos sean modificados ni en estructura, ni en valor, utilizaremos el metodo FREEZE(Congelar)
console.log("La estructura actual del Objeto COMPRADOR es: ")
console.table(Comprador)
Object.freeze(Comprador)

//Intentamos agregar, eliminar o modificar los valores de sus propiedades
Comprador.FechaUltimaCompra = "04/11/2023"
Comprador.Direccion = "Calle Venustiano Carranza #16, Col. El Naranjal, Huauchinango, Puebla. Mexico"
delete Comprador.Nombres

console.log("Verificamos si se realizaron los cambios en el Objeto COMPRADOR: ")
console.table(Comprador)

console.log('%c8. Metodos para controlar la mutabilidad de los Objetos. Sellado(SEAL)', style_console)
//Sin embargo, en el caso que desemos poder podificar los valores de las propiedades del Objeto, pero no se su estructura usaremos SEAL
console.log("Objeto antes de ser modificado: ")
console.table(Pedido)
Object.seal(Pedido)
//Intentamos modificar su estructura
Pedido[`FechaPédido`] = "04/11/2023 12:43:52"
delete Pedido[`Cantidad`]

console.log("Verificamos si se realizaron los cambios en el Objeto PEDIDO: ")
console.table(Pedido)
// Ahora intentaremos modificar el valor de las propiedades
Pedido.Cantidad = 5
console.log("Verificamos si se realizaron los cambios en el Objeto PEDIDO: ")
console.table(Pedido)

//Desestructuracion de 2 o mas objetos
console.log('%c9. Desestructuracion de 2 o mas Objetos', style_console)

let {Producto_Precio: productoPrecio, Producto_Marca: productoMarca} = producto
let {Correo: clienteCorreo, PaisOrigen: clientePais, SaldoActual: clienteSaldo, tipo: clienteTipo} = Comprador

//Transformar valores cuantitativos en cualitativos
if(productoPrecio > "2000")
    productoPrecio = "Caro"
else
    productoPrecio = "Barato"

if(clienteSaldo > 0)
    clienteSaldo = "Con Saldo"
else if(clienteSaldo < 0)
    clienteSaldo = "Con Deuda"
else
    clienteSaldo = "Sin Saldo"

//Transformar valores cualitativos en cuantitativos

let clienteNivel;

if(clienteNivel == "Premium")
    clienteNivel = 1
else if(clienteNivel == "Freemium")
    clienteNivel = 2
else if(clienteTipo == "No identificado")
    clienteNivel = 3

//Clasificamos al cliente por su pais de origen
if(clientePais == "Mexico")
    clientePais = "Nacional"
else
    clientePais = "Extranjero"

// OLE Object Literal Ennhacement
let datosClientePromociones = {clienteCorreo, clientePais, clienteNivel, clienteSaldo, productoMarca, productoPrecio}

//El nuevo objeto que creamos seria un ejemplo de la informacion que enviariamos al area de Marketing para la difusion de promociones
console.log("Los datos del cliente y sus habitos de compra son: ")
console.table(datosClientePromociones)

//Operaciones sobre Objetos
//Union de Objetos
console.log('%c10. Union de Objetos usando el metodo de asignacion (ASSING)', style_console)
console.log("Imprimimos la estructura y valores de un Objeto PRODUCTO")
console.table(producto)

console.log("Imprimimos la estructura y valores del Objeto PEDIDO")
console.table(Pedido)

//? Clonamos el objeto producto para poder usar el ejemplo de assing
let Producto3 = {...producto}

//Suponiendo que el usuario ya realizo el pago, el pedido se convertira en una VENTA que requiere informacion de ambos Objetos
const venta = Object.assign(Producto3, Pedido) //Esta linea es la que esta uniendolos
console.log("Consultamos este nuevo Objeto VENTA")

// ! Assing tiene un problema, cuando tiene 2 atributos con el mismo nombre, falla, solo imprime 1 atributo y puedes perder informacion (NO USAR ASSING)
console.table(venta)

// ? Union de Objetos usando SPREAD OPERATOR para evitar la perdida de informacion con objetos que comparten el mismo nombre en sus propiedades
console.log('%c11. Union de Objetos usando el SPREAD OPERATOR (...)', style_console)

console.log("Verificamos los Objetos antes de la union")
console.table(producto)
console.table(Comprador)
console.table(Pedido)

let venta2 = {
    producto: {...producto},
    comprador: {...Comprador},
    pedido: {...Pedido}
}
console.log("Fusionamos los 3 objetos en uno nuevo, sin perdida de informacion")
console.table(venta2)

console.log('%c12. Union de Objetos de POST UNION', style_console)
//Vamos a verificar el estatus de mutalbilidad de los objetos
console.log("Vamos a verificar el estatus de mutabilidad del objeto PEDIDO")
console.log(`¿Esta el objeto de Pedido Congelado? : ${Object.isFrozen(Pedido)}`)
console.log(`¿Esta el objeto de Pedido Sellado? : ${Object.isSealed(Pedido)}`)

console.log("Vamos a verificar el estatus de mutabilidad del objeto COMPRADOR")
console.log(`¿Esta el objeto de Comprador Congelado? : ${Object.isFrozen(Comprador)}`)
console.log(`¿Esta el objeto de Comprador Sellado? : ${Object.isSealed(Comprador)}`)

console.log("Vamos a verificar el estatus de mutabilidad del objeto PRODUCTO")
console.log(`¿Esta el objeto de Producto Congelado? : ${Object.isFrozen(producto)}`)
console.log(`¿Esta el objeto de Producto Sellado? : ${Object.isSealed(producto)}`)

//Modificamos la estructura del producto, agregando una nueva propiedad
producto[`isLegacy`] = true

console.table(producto)
console.table(venta2)