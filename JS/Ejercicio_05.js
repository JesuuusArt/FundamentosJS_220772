//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(64,224,208,1) 0%, rgba(0,128,128,1) 33%, rgba(0,206,209,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`;

//Personalización de las salidas a consola

console.warn("Práctica 07: Arreglos en JavaScript")

console.log("%c1.- Si/Entoces (IF)", style_console)

//Le indica al programa que hacer o que no en base a una prueba lógica de verdadero o falso 
let fechaActual=new Date();
console.log(`Hola, la fecha de hoy es: ${fechaActual.toDateString()}`)

//Y si la necesitamos en formato local(?)

const fechaLocalMX= fechaActual.toLocaleString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
});

console.log(`en formato local (México): ${fechaLocalMX}`)

//Si es antes de las doce saluda con buenos días

if(fechaActual.getHours()<12)
    console.log(`Buenos días, hoy es ${fechaLocalMX}`)

//Existe un extensor de la sentencia if(Sí) que es else (En Caso contrario)
if(fechaActual.getMonth()<=6)
    console.log(`Estas en la primera mitad del año`)
else
    console.log(`Estas en la segunda mitad del año.`)


//que pasa si la validación tiene varias operaciones 
const anio= fechaActual.getFullYear()
let inicioPrimavera = new Date(anio, 2, 21);
let inicioVerano = new Date(anio, 5, 21);
let inicioOtonio = new Date(anio, 8, 23);
let inicioInvierno = new Date(anio, 11, 21);

let horarioVerano = false;

if(fechaActual >= inicioPrimavera && fechaActual < inicioVerano) {
    console.log("Estamos en PRIMAVERA...")
    console.log("Inicia la floracion de muchas plantas...");
    console.log("Los dias son mas largos y las noches mas cortas...")
    console.log("Muchos animales despiertan de la hibernacion...")
    estacion = "Primavera"
    horarioVerano = true
} 
else if(fechaActual >= inicioVerano && fechaActual < inicioOtonio){
    console.log("Estamos en VERANO...")
    console.log("En esta temporada abundan los dias soleados y calurosos...")
    console.log("En esta temporada el indice de turismo vacacional sube...")
    console.log("Mucha gente busca realizar actividades al aire...")
    estacion = "Verano"
    horarioVerano = true

} 
else if(fechaActual >= inicioOtonio && fechaActual < inicioInvierno){
    console.log("Estamos en OTOÑO...")
    console.log("Los arboles suelen camviar de follaje...")
    console.log("Se registran temperaturas mas templadas...")
    console.log("Los animales comienzan con la recoleccion de alimento y preparan sus espacios para la hibernacion, incluso algunas aves migran...")
    estacion = "Otoño"
    horarioVerano = false
}
else {
    console.log("Estamos en INVIERNO...")
    console.log("En esta temporada los dias son mas cortos y las noches mas largas...")
    console.log("En algunas regiones suele nevar...")
    console.log("Dado las bajas temperaturas, se recomienda abrigarse...")
    estacion = "Invierno"
    horarioVerano = false
}


console.log("%c2.- Operador Ternario (validacion ? cumple : no_cumple)", style_console)
//En JS existe una operacion simplificada que valida si una condicion se comple o no, y que hacer en cada caso

const edadPersona = 20
const mayoriaEdadMX = 18
const mayoriaEdadUS = 21

let evaluarMayoriaEdad = (edad) => 
    edad >= 18 ? "Eres mayor de edad." : "No eres mayor de edad."  //Operacion Ternaria

console.log("Evaluando la mayoria de edad de la persona...")
console.log(evaluarMayoriaEdad(edadPersona))

//Sin embargo tenemos que considerar que la mayoria de edad varia en cada pais por cuestiones legales, por lo que debemos cosiderar un segundo parametro en la evaluacion

evaluarMayoriaEdad = (edad, pais) =>
    (edad >= 18 && pais == "MX") ? `En ${pais} eres mayor de edad ` : `En ${pais} no eres mayor de edad`

console.log("Evaluando la mayoria de edad de una persona en Mexico...")
console.log(evaluarMayoriaEdad(edadPersona, "MX"))

console.log("Evaluando la mayoria de edad de una persona en Estados Unidos...")
console.log(evaluarMayoriaEdad(edadPersona, "US"))


console.log("%c3.- SWITCH - CASE (Eleccion por valor definido)", style_console)
//Calculando tu generacion en base a tu edad

let asignageneracion = (aniNacimiento) => {
    switch(true){
        
        case(aniNacimiento < 1968) :
        return "Baby Boomers"

        case(aniNacimiento > 1968 && aniNacimiento <= 1980) :
        return "Generacion X"

        case(aniNacimiento > 1980 && aniNacimiento <= 1994) :
        return "Milenials"

        case(aniNacimiento > 1994 && aniNacimiento <= 2010) :
        return "Generacion X"

        case(aniNacimiento > 2010) :
        return "Krystal"
    }
}

console.log(`Dado que naci en el año 2003, soy de la generacion: ${asignageneracion(2003)}`)

console.log("%c4.- Manejo de Excepciones (TRY / CATCH)", style_console)

//En algunas ocaciones existen errores que no son culpa del programa, si no del usuario, la red o incluso del middleware
//Pero sin duda debemos controlar para evitar las fallas de ejecucion

//!-------
console.log("Intentamos dividir: 0/10, el resultado es: ")

try{
    let result = 0/10
    console.log(result)
}catch(error){
    console.log("Ocurrio un error: " + error.message)
}

//!-------
console.log("Intentamos dividir: 10/0, el resultado es: ")

try{
    let result = 10/0
    console.log(result)
}catch(error){
    console.log("Ocurrio un error: " + error.message)
}

//!-------
console.log("Intentamos dividir: a/10, el resultado es: ")

try{
    let result = "a"/10
    console.log(result)
}catch(error){
    console.log("Ocurrio un error: " + error.message)
}

//!-------
console.log("Intentamos dividir: la variable a/10, el resultado es: ")

try{
    let result = a/10
    console.log(result)
}catch(error){
    console.log("Ocurrio un error: " + error.message)
}

console.log("Intentamos dividir el valor de la variable x entre el valor de la variable y, x/y, el resultado es: ")

try {
    let x = 8, y = 2, result = x / y
    console.log(result)
} catch (error) {
    console.log("Ocurrio un error: " + error.message)    
}


console.log("%c5.- Control de ciclos (BREAK / CONTINUE)", style_console)

// ? En algunas ocaciones sera importante detener un ciclo de manera abrupta para controlar casos especiales en un ciclo

console.log("Vamos a contar del 1 al 10...")
for (let num = 1; num <= 10; num++) {
    console.log(num)
}

console.log("Ahora necesitamos que si llegas al 7, pares de contar, suponiendo que solo por hoy es de mala suerte...")
for (let num = 1; num <= 10; num++) {
    if (num == 7) {
        break
    }else{
        console.log(num)
    }
}

console.log("Ahora necesitamos que si llegas al 7, saltes ese numero y continues")
for (let num = 1; num <= 10; num++) {
    if (num == 7) {
        continue
    }else{
        console.log(num)
    }
}


console.log("%c6.- Ciclo Iterativo (FOR)", style_console)
// ? Recorre de manera iterativa (i), de incremental o decremental

console.log("Los dias de la semana en orden ascendente son: ")

let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

for (let i = 0; i < dias.length; i++) {
    console.log(dias[i])
}

console.log("--------")
console.log("Los meses del año en orden descendente son: ")

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
for (let i = meses.length-1; i >= 0; i--) {
    console.log(meses[i])
}


console.log("%c7.- Ciclo Condicionales (WHILE)", style_console)

// ? Estos ciclos (BUCLE) dependen de una condicion para continuar ejecutandose

let finDeSemana = false
let mensaje = " "
let j = 0

while (j < dias.length){
    switch(j){
        case 0:
            finDeSemana = true
            mensaje = "Pomingo"
            break
        case 1:
            finDeSemana = false
            mensaje = "Gluglunes"
            break
        case 2:
            finDeSemana = false
            mensaje = "Mamartes"
            break
        case 3:
            finDeSemana = false
            mensaje = "Miercolitros" 
            break
        case 4:
            finDeSemana = false
            mensaje = "Juebeves"
            break
        case 5:
            finDeSemana = false
            mensaje = "Beviernes"
            break
        case 6:
            finDeSemana = true
            mensaje = "SabaDrink"
            break
    }   

    if (!finDeSemana) {
        console.log(`Dia: ${dias[j]}`)
        console.log(`Mensaje del dia: ${mensaje}`)
    } 
    j++
}


console.log("%c8.- Ciclos Condicionales, que se ejecuta al menos una vez (DO-WHILE)", style_console)

// ? Simulamos una lista de episodios de una temporada
let episodios = [
    "Episodio 1: Pilot (Piloto)",
    "Episodio 2: The Big Bran Hypothesis (La hipótesis del gran cerebro)",
    "Episodio 3: The Fuzzy Boots Corollary (El corolario de las botas difusas)",
    "Episodio 4: The Luminous Fish Effect (El efecto del pez luminoso)",
    "Episodio 5: The Hamburger Postulate (El postulado de la hamburguesa)"
]

let indice = 0
let continuarViendo = true // ? Esta variable simula la decision del usuario de continuar viendo

do{
    console.log(`Reproduciendo ${episodios[indice]}`)

    // ? Simulamos la reproduccion del episodio
    indice++

    if (indice < episodios.length) {
        continuarViendo = confirm("¿Deseas continuar con el siguiente episodio?")
    }else{
        continuarViendo = false // ? Cuando se acaba la lista de episodios
    }
} while (continuarViendo && indice < episodios.length)

console.log("Fin de la reproduccion")


console.log("%c9.- Ciclos para recorrer elementos finitos (FOR ... OF)", style_console)

// ? Ciclo para recorrer objetos iterables como mapas, arreglos, cadenas(STRINGS) y conjuntos de datos

let seriesTrending = [
    { nombre: "The Witcher", temporadas: 3, totalViewers: "1.5M", totalReprods: "4.0M" },
    { nombre: "Stranger Things", temporadas: 4, totalViewers: "1.2M", totalReprods: "5.1M" },
    { nombre: "Breaking Bad", temporadas: 5, totalViewers: "570K", totalReprods: "1.8M" },
    { nombre: "Game of Thrones", temporadas: 8, totalViewers: "10.0M", totalReprods: "2.5M" },
    { nombre: "The Crown", temporadas: 6, totalViewers: "350K", totalReprods: "800K" },
    { nombre: "Money Heist", temporadas: 5, totalViewers: "650K", totalReprods: "1.7M" },
];

// ? Usando For..Of para recorrer la lista

for (let serie of seriesTrending) {
    console.log(`Serie: ${serie.nombre}, Temporadas: ${serie.temporadas}`)
}

try {
    console.log(`La ultima serie vista fue: ${serie.nombre}`) // ! No funciona esta linea ya que (serie.nombre) solo tiene el alcance dentro del For Of, ya que esta usando let y fue usada dentro del ciclo
} catch (error) {
    console.log("Ocurrio un error: " + error.message)
}


console.log("%c10.- Ciclos para recorrer las propiedades de elementos finitos (FOR ... IN)", style_console)

// ? Usando for ... In para recorrer cada serie

for (let i in seriesTrending) {
    console.log(`Serie ${parseInt(i) + 1}:`)
    for (let propiedad in seriesTrending[i]) {
        console.log(`${propiedad}: ${seriesTrending[i][propiedad]}`)
    }
    console.log("-----------------------")
}


console.log("%c10.- Ciclos interrumpidos para cada uno de los elementos del arreglo (FOR EACH)", style_console)

// ? Lista de series de TV trending con temporadas, viewers y reproducciones

let seriesTrending2 = [
    { nombre: "The Witcher", temporadas: 3, viewers: 800000, reproducciones: 2500000 },
    { nombre: "Stranger Things", temporadas: 4, viewers: 1200000, reproducciones: 5100000 },
    { nombre: "Breaking Bad", temporadas: 5, viewers: 570000, reproducciones: 1800000 },
    { nombre: "Game of Thrones", temporadas: 8, viewers: 10000000, reproducciones: 2500000 },
    { nombre: "The Crown", temporadas: 6, viewers: 350000, reproducciones: 800000 },
    { nombre: "Money Heist", temporadas: 5, viewers: 650000, reproducciones: 1700000 },
]

// ? Usando forEach para recorrer cada serie y calcular la calificacion
seriesTrending2.forEach((serie, index) => {
    let calificacion = (serie.reproducciones / serie.viewers).toFixed(2)

    console.log(`serie ${index + 1}: `)
    console.log(`Nombre: ${serie.nombre}`)
    console.log(`Temporadas: ${serie.temporadas}`)
    console.log(`Viewers: ${serie.viewers}`)
    console.log(`Reproducciones: ${serie.reproducciones}`)
    console.log(`Calificacion: ${calificacion}`)
    console.log("------------------")
})


// ? Usando filter para filtrar y map para transformar la informacion 
// ? Lista de series que queremos verificar

let seriesDeseadas = ["The Witcher", "The Boys", "Loki"]

// ? Usando map e includes para filtrar y obtener los nombres de series con 3 temporadas
let seriesConTresTemporadas = seriesTrending2
.filter(serie => serie.temporadas === 3) // ? Filtramos las series que tienen 3 temporadas
.map(serie => serie.nombre) // ? Obtenemos solo los nombres de esas series
.filter(nombre => seriesDeseadas.includes(nombre)) // ? Filtramos las que estan en la lista de series deseadas

// ? Mostrar los resultados
console.log("Series con 3 temporadas que estan en la lista deseada: ")
console.log(seriesConTresTemporadas)