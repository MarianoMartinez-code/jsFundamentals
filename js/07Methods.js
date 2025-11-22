// Metodos en JavaScript

// const persona = {
//     nombre: "Juan",
//     apellido: "Perez",
//     edad: 25,
//     genero: "Masculino",
//     isMayorDeEdad: true,
//     precio: 19.99,
//     hobbies: ["Deportes", "Musica", "Cine"],
//     direccion: {
//         calle: "Calle 1",
//         numero: 123,
//         ciudad: "Ciudad 1"
//     },
//     nombreCompleto: function() {
//         return this.nombre + " " + this.apellido;
//     }
// };

// console.log(persona.nombreCompleto());

// Calculadora usando atributos y metodos
const calculadora = {
    numero1: 0,
    numero2: 0,
    suma: function() {
        return this.numero1 + this.numero2;
    },
    resta: function() {
        return this.numero1 - this.numero2;
    },
    multiplicacion: function() {
        return this.numero1 * this.numero2;
    },
    division: function() {
        return this.numero1 / this.numero2;
    }
};

// Usar la calculadora
