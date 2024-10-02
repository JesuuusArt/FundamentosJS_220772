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