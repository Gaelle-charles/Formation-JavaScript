/* ---------------------------LES BOUCLES -------------------- */


/*  Pour  i=0; tant que  i est strictement inférieur  ou = à 10; 
alors j'incrémente i de 1. */


// for (let i=0 ; i<=10; i++){
//     document.write( '<p>Instruction exécutée : <strong>' + i + '</strong></p>');
// }

// document.write('<hr>');


// let j=0;
// /*  Tant que j est  inférieur à 10;
// *   j'exécute ma boucle
// */

// while (j<=10){
//     document.write('<p>Instruction executée : <strong>'+ j + '</strong></p>');
//     j++;
// }

// document.write('<hr>');


/* ---------------------------  EXERCICE  ----------------------- */

// const prenoms = ['Jean', 'Marc', 'Matthieu', 'Paul', 'Luc', 'Hugo', 'Jacques'];

// for(let i=0; i<7; i++){
//     document.write(prenoms[i]);
//     console.log(prenoms[i]);
// }
// document.write();

// /* ---------------------AUTRE MÉTHODE----------CORRECTION--------- */
// console.log('************');
// for( let index=0; index<prenoms.length; index++){
//     console.log(prenoms [index]);
// }


/* --------------------------EXERCICE 2 : ADDITION ----------------------------- */
/*
Exercice : Addition
Créer un tableau qui contient les valaurs suivantes : 1, 2, 3, 4, 5, 6, 7, 8, 9
faire une boucle qui permet d'additionner toutes ces valeurs.
1. Prendre chaque élement séparément
2. Additionner le 1 avec le 2 et ainsi de suite ..
*/


// const monTableau = [1, 2, 3, 4 , 5, 6 ,7 ,8 ,9];

// //  1- Déclarer une variable permettant de garder en mémoire la somme
//  for (let i=0 ; i<10; i++){
//      document.write(++i);
//  }
 
//  document.write(monTableau);


 /* ------------------------------CORRECTION -------------------------------------- */

 
//  const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//  //--1.Déclarer une variable permettant de garder en memoire la somme
//  let resultat= 0;

// //   2 créer une boucle permettant d'additionner les nombres

// for (let i=0; i< nombres.length; i++){
//     // On sait que i prendra successivement les valeurs de 0...10
//     // Comment additionner les valeurs ?
//     resultat =  resultat + nombres[i]; /* autre méthode 
//     resultat += nombres[i];
//     */
// }

// document.write(resultat);

//  ----------------------------- EXERCICE ----------------------------------

/*
Exercice : Vos meilleurs choix

    Crée un tableau qui contient 3 noms d'acteur
    Pour chaque acteur, affichez dans la console par exemple : "Le numero 1 est Stalone"

Bonus : transformez en : "Le premier est Stalone", Le deuxième est Cruiz", etc...
*/



// const acteur = [ 'Brad PITT', 'Scarlette JOHANSON', 'Jesse WILLIAMS'];
// const classement = ['Premier', 'Deuxième' , 'Troisième'];


// for (let i=0; i<acteur.length ; i++){
//     console.log ('Le numéro ' + i + ' est ' + acteur[i]);
//     console.log ('Le ' + classement[i] + ' est ' + acteur[i]);
// }



/*
    EXERCICE :
    Utilisez la méthode getMonth() de l'objet Date pour retourner 
    le numéro du mois en cours : 0 pour janvier, 1 pour février 
    et ainsi de suite jusqu'à 11 pour décembre : var mois = (new Date).getMonth().

    Ecrivez un petit script qui retourne le nom complet du mois dans une alerte. 
    Servez-vous d'un tableau pour stocker les noms des mois.
*/

const mois = (new Date).getMonth();
console.log (mois);

const mois1 = ['Janvier', 'Février' , 'Mars', 'Avril', 
'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

console.log(mois1[mois]);

alert ('Actuellement nous sommes en ' + (mois1[mois]));
