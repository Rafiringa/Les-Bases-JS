// console.log("Coucou la console");

/* Commenter 
en plusieurs 
ligne */

let variable = "Hello";

//Kamel Case
let maSuperVariable = "Salut";

console.log(variable); /*JS est sensible à la case*/

// ** Les variables **
// Var = vieux JS
var unTexte = "Voici un texte";

// const = constante
const prenom = "Justine";

// Let = la variable peut évoluer
let unChiffre = 24;
unChiffre = 22;

let chaine = "Je suis l'une des chaines de caractères";

let nouvelleChaine =
  "Chaine précédente : " + chaine + ". Voila c'était le contenu";

// Concatenation avec guillemets altgr+7
let autreConcatenation = `Chaine précédente :  ${chaine}. Voila c'était le contenu`;

// ** Types de données **
let string = "Je suis une chaine de caractère";
let number = 42;
let boolean = false; //or true

// Tableau : il y a des crochets []
let array = ["je", "suis", 47, true];

// Objet : accolades {}
let objet = {
  prenom: "audrey",
  age: 33,
  ville: "bordeaux",
};

let arbre;
arbre = "sapin";

// ** Les opérateurs **
console.log(4 + 5);
console.log(4 - 5);
console.log(4 / 5);
console.log(4 * 5);
//puissance
console.log(4 ** 5);

// ** Les opérateurs d'afféctation **
let total = 0;
total++; //total = total + 1;

total += 5; //total = total + 5;
total -= 4;
total *= 2;

// ** Structure de controle **
let x = 2;
let y = 2;

// if (x > y) {
//   alert("YES x plus gros que y");
// } else if (y > x) {
//   alert("y est plus grand!");
// } else {
//   alert("Ils sont égaux!");
// }

// On test si lma variable est "true"
if (x) {
  // console.log("x existe !");
}

// === teste l'égalité en type et valeur
if (x === y) {
  //   console.log("ils sont égaux");
} else {
  //   console.log("pas égaux");
}

let a = 2;
let b = "2";
// == teste l'égalité de valeur sans prendre en compte le type
if (a == b) {
  //   console.log("ils sont égaux");
} else {
  //   console.log("pas égaux");
}

// || ou
// && et

x = 7;
y = 9;
// Soit l'un soit l'autre
if (x < y || x > 6) {
  //   console.log("OUI");
}

// && il faut que toutes les conditions soient réunies
if (x < y && x > 6) {
  //   console.log("OUI");
}

// ** Les fonctions **

// fonction classique (à l'ancienne)
function faireQuelquesChose() {
  console.log("Je fais un truc");
  console.log(5 + 6);
  alert("Calcule terminé !");
}
// Il faut impérativement appeler la fonction pour qu'elle se joue
/* appel de la fonction : 
faireQuelquesChose(); 
*/

// fonction fléchée
const addition = (a, b) => {
  console.log(a + b);
};

addition(4, 4);
addition(4332, 45545414);

// ** La portée des variables **

function add2() {
  let num = 4;
  console.log(num + 2);
}

add2();
