alert('Yes! ça fonctionne !');
//pour faire un commentaire (ctrl+:)
/*  commentaire sur plusieur ligne   : raccourci  : shift+alt+a */

// Déclarer une variable
var prenom;

// Affecter une valeur à la variable "prénom"
prenom='Gazou';

// Afficher la valeur de la variable dans la console
console.log(prenom);

//  LES TYPES DE VARIABLES 
/*  type of me permet de connaitre le type de valeur dans ma variable */

console.log(typeof prenom); // ma var "prenom" est une chaine de caratére (string)

// déclarer et affecter 
var age = 30;


console.log( age);
console.log( typeof age);

// Variables de type FLOAT
var uneDecimale = -2.984;
console.log(uneDecimale);
console.log( typeof uneDecimale );

// Les booléens (vrai /faux)
var unBooleen = false; // true
console.log(unBooleen);
console.log( typeof unBooleen );

// Les constantes
const host="localhost";
const user="root";
const password="mysql1";

var unNombre= '24'; // chiffre entre '' donc le navigateur le lis comme du texte
console.log( unNombre);
console.log( typeof unNombre);// type string

// Pour convertir un nb entier (integer, ou int)
unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// Pour convertir un nb décimal (float)
unNombre= '12.55';
unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);


// LA PORTEE DES VARIABLES

/* Les var déclarées directement à la racine du fichier js, sont appelées variables 
globales 
Elles sont dispo dans l'ensemble du doc JS, y compris dans les fonctions*/

// LES VAR LOCALES

/* déf.: Les var déclarées à l'intérieur d'une fonction.
Elles st dispo uniquement dans le scope de la fonction */