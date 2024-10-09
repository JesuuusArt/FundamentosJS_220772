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

