



/*                LES CONDITIONS                */

// var majoriteLegaleFr = 18;
// if( 19 /* > supérieur */>= majoriteLegaleFr){
//     alert('Bienvenue ! ');
// } else if (18 == majoriteLegaleFr) {
//     alert("C'est un peu juste non ?!");
// } else {
//     alert("Maintenant il y a google");
// }


// /* --- EXCERCICE  ---
// Créer une fonction qui vérifie l'age d'un visiteur (prompt). 
// S'il a la majorité légale, alors je lui souhaite la bienvenue, sinon,
// je fais une redirection sur Google après lui avoir signalé le soucis.
// */

// // créer une fonction
// function verifAge (){

// // Vérifier l'age du visiteur
//     var age = prompt("Indiquer votre age svp", "Exemple : 22 ");
// // S'il a la majorité légale
//     var majoriteAge = 18;

// // je lui souhaite la bienvenue
//     if( age >= majoriteAge ){
//         alert('Bienvenue ! ');
// // sinon, je fais une redirection sur Google
//     }else {
//         alert ("Tu n'as pas l'âge requis pour accéder au site")
//         window.location.replace("https://www.google.fr/");
//     }
// };

// verifAge ();

// /* CORRECTION : AUTRE METHODE */


//  créer une fonction
//  const majoriteLegaleFr = 18;
//  function monUtilisateurEstMajeur (age){
//     if(age >= 18){
//          return true;
//      }else {
//          return false;
//     }
//  }

// //  Demande l'age à l'utilisateur
//  const ageSaisieParMonUtilisateur = parseInt(
//      prompt("Bonjour, quel âge avez-vous ?", "Saissez votre age")
//  );

// //  Vérifier l'age du visiteur

//  if ( monUtilisateurEstMajeur (ageSaisieParMonUtilisateur)){
//      alert("Bienvenue sur mon site réservé aux majeurs !");
//  }else {
   
// //  Redirection en cas d'échex

//  alert("Vous devez être majeur pour accéder à ce site.");
// document.location.href= "https://google.fr";
//  }


/*  ------   LES OPÉRATEURS DE COMPARAISON    ------


L'opérateur de comparaison " ==" signifie : Egal à.
Il permet de vérifier que 2 variables sont identiques.

L'opérateur de comparaison " ===" signifie : stritement égal à. 
Il va comparer la valeur, mais aussi le type.

if(14 == "14") {} = true
if(14 === "14") {} = false
if(14 === 14) {} = true

L'opérateur " != " : Différent de.
L'opérateur " !== " : Strictement différent de.

if(12 != 14) {} = true
if(12 !== '12') {} = true
*/

/*  -------      EXERCICE    --------

J'arrive sur un Espace Sécurisé au moyen d'un email et d'un mot de passe.
Je dois saisir mon email et mon mot de passe afin d'être authentifié sur le site.
En cas d'échec une "alert" m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.

*/

const emailConnexion="wf3@gmail.com";
const mdpConnexion = "wf3";

const emailUtilisateur = prompt("Email : ", "Saissez votre email","Mot de passe");
const mdpUtilisateur = prompt("Mpd : ", "Saissez votre mot de passe","Mot de passe");

    if (emailConnexion === emailUtilisateur && mdpUtilisateur === mdpConnexion){
        alert("Bienvenue !");
    } else {
            alert("Identifiants incorrects !");
        }


                 /* -------------------------------------------|   |------------- *\
        /                                              |   |                \
       /           ~         LES OPERATEURS LOGIQUES          ~              \
      /_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\
        |                                                                   |
        |   # L'Opérateur ET : &&. Si la combinaison email et emailUser     |
        |   correspond, ET la combinaison mdp et mdpUser correspond.        |
        |                                                                   |
        |   --> Dans cette condition, les 2 doivent OBLIGATOIREMENT         |
        |   correspondre pour être validée.                                 |   
        |   Ex. if(emailUser === email && mdpUser === mdp) { ... }          |
        |                                                                   |
        |   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   |
        |                                                                   |
        |   # L'Opérateur OU : ||. Si la combinaison email et emailUser     |
        |   correspond, ET / OU la combinaison mdp et mdpUser correspond.   |
        |                                                                   |
        |   --> Dans cette condition, au moins l'une des deux doit          |
        |   correspondre pour être validée.                                 |
        |   Ex. if(emailUser === email || mdpUser === mdp) { ... }          |
        |                                                                   |
        |   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   |
        |                                                                   |
        |   # L'Opérateur " ! " ou encore NOT.                              |
        |   Il signifie le CONTRAIRE DE, DIFFERENT DE                       |
        |                                                                   |
        |   var monUtilisateurEstApprouve = true;                           |
        |   if ( !monUtilisateurEstApprouve ) { ... }                       |
        |   Si mon utilisateur n'est pas approuvé                           |
        |                                                                   |
        |  Revient à écrire                                                 |
        |  if ( monUtilisateurEstApprouve === false ) { ... }               |
        |                                                                   |
        \*_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _*/