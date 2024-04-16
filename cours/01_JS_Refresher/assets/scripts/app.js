/* import / export */
/* --------------- */
// import  {apiKey}  from "./conf.js";
// console.log(apiKey);
//
// import  apiKey  from "./conf.js";
// console.log(apiKey);

// import * as conf from "./conf.js";
// console.log(conf);
// console.log(conf.apiKey);

// import { apiKey as content } from "./conf.js";
// console.log("apiKey", apiKey);
// console.log("content", content);


/* variables et operations */
/* ----------------------- */

// let nombre = 10;
// const texte = 'Bonjour';
// var estVrai = true;
// let nul = null;
// let indefini = undefined;
//
// console.log(nombre)
// console.log(nombre + 2)
// console.log(3 * nombre + 2)
//
// console.log(estVrai)
// console.log(nul)
// console.log(indefini)


// Types objet
// const tableau = [1, 2, 3];
// const objet = { clé: 'valeur' };
// const fonction = function() { console.log('Bonjour'); };
//
// console.log(tableau)
// console.log(objet)
// console.log(fonction)
// fonction();


/* fonctions */
/* --------- */

// Fonction traditionnelle
// function addition(a, b) {
//     return a + b;
// }

// console.log(addition(3, 2))

// Fonction fléchée
// const soustraction = (a, b) => a - b;

// console.log(soustraction(3, 2))

/* objets et tableaux */
/* ------------------ */

// Objet
const personne = {
    nom: 'Jean',
    age: 30,
    ville: 'Paris'
};

console.log(personne)
console.log(personne.nom)
console.log(personne["age"])
console.table(personne)

// Tableau
const fruits = ['pomme', 'banane', 'orange'];
console.log(fruits[1])
console.log(fruits)
console.table(fruits)
console.log(fruits.length)
fruits.push('poire')
console.log(fruits.length)
fruits.forEach(fruit => console.log("===>", fruit));
fruits.unshift('ananas')
console.log(fruits)


/* les boucles */
/* ------------------ */

// for (let i = 0; i < 5; i++) {
//    console.log(i); // Affiche 0, 1, 2, 3, 4
// }


// let i = 0;
// while (i < 5) {
//   console.log(i); // Affiche 0, 1, 2, 3, 4
//   i++;
// }


// let j = 0;
// do {
//   console.log(j); // Affiche 0, 1, 2, 3, 4
//   j++;
// } while (j < 5);


// const array = ['a', 'b', 'c'];
// for (const value of array) {
//   console.log(value); // Affiche 'a', 'b', 'c'
// }

// const object = {a: 1, b: 2, c: 3};
// for (const key in object) {
//   console.log(key, object[key]); // Affiche 'a 1', 'b 2', 'c 3'
// }


/* classes et methodes et POO */
/* -------------------------- */
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
//   greet() {
//     console.log("Hi!, my name is", this.name, " I am ", this.age);
//   }
// }
//
// const user1 = new User("Manuel", 35);
// console.log(user1);
// user1.greet();
// const user2 = new User("Bob", 40);
// user2.greet();


/* destructuring operator */
/* ---------------------- */

// const user = { nom: 'Jean', age: 30 };
// const { nom, age } = user;
// console.log(nom); // Jean
// console.log(age); // 30


// const nombres = [1, 2, 3];
// const nouveauxNombres = [...nombres, 4, 5, 6];
// console.log(nouveauxNombres); // [1, 2, 3, 4, 5, 6]


/* spread operator */
/* ---------------- */
// Création d'un nouvel objet en utilisant le spread operator pour fusionner deux objets
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }

// Copie d'un objet avec le spread operator
const originalObj = { x: 1, y: 2 };
const copiedObj = { ...originalObj };
console.log(copiedObj); // { x: 1, y: 2 }

// Modification d'un objet en ajoutant
// ou en remplaçant des propriétés avec le spread operator
const user = { name: 'John', age: 30 };
const updatedUser = { ...user, age: 31, email: 'john@example.com' };
console.log(updatedUser); // { name: 'John', age: 31, email: 'john@example.com' }



// Utilisation du spread operator pour passer un tableau d'arguments à une fonction
function sum(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

// Utilisation du spread operator pour fusionner les arguments d'une fonction
function concatStrings(...strings) {
    return strings.join(' ');
}
console.log(concatStrings('Bonjour', 'à', 'tous')); // "Bonjour à tous"

// Utilisation du spread operator avec des arguments par défaut dans une fonction
function greet(name, greeting = 'Bonjour') {
    return `${greeting}, ${name} !`;
}
const userInfo = ['Jean'];
console.log(greet(...userInfo)); // "Bonjour, Jean !"


/* Référence et Types de Base pour les Variables */
/* --------------------------------------------- */

// Par valeur
let x = 10;
let y = x;
x = 20;
console.log(y); // 10

// Par référence
const tableau1 = [1, 2, 3];
const tableau2 = tableau1;
tableau1.push(4);
console.log(tableau2); // [1, 2, 3, 4]


/* Programmation asynchrone */
/* ------------------------ */

// function handleTimeout() {
//   console.log("Timed out!");
// }
//
// const handleTimeout2 = () => {
//   console.log("Timed out ... again!");
// };
//
// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//   console.log("More timing out...");
// }, 4000);


// promesses

// function getNumber() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const rand = Math.floor(Math.random() * 20);
//             if (rand > 10) {
//                 resolve(rand); // La promesse est accomplie avec cette valeur
//             } else {
//                 reject('Failed to generate a number greater than 10'); // La promesse est rejetée avec cette raison
//             }
//         }, 1000);
//     });
// }
//
// getNumber()
//     .then(number => console.log(`Generated number: ${number}`))
//     .catch(error => console.error(`Error: ${error}`));


