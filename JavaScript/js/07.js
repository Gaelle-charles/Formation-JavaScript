/* 

EXERCICE

Réaliser une fonction permettant à un internaute de :
- Saisir son Prénom dans un Prompt
- Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
- Saisir son Age
- Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
- Afficher ensuite un récapitulatif dans la page.
Bonjour [PRENOM], tu as [AGE] ! 


*/


//  Consigne de l'exo :

// 1. Création d'une fonction

function presentation() {

// 2. Demande à l'utilisateur son prénom via un prompt

var prenom = prompt("Quel est votre prénom ?", "Entrez votre prénom");
console.log(prenom);

// 3. Je lui demande son age

var age = parseInt( 
    prompt("Bonjour " + prenom + ", quel est votre âge ?", "Entrez votre âge")
    );
console.log(age);
console.log(typeof age);

// 4. Calculer l'année de naissance

        // ou var anneeActuelle = objetDate.getFullYear();
        //  var dateDeNaissance =  anneeActuelle - age;
var objetDate = new Date ();
var dateDeNaissance =  objetDate.getFullYear() - age;
alert("Tu es donc né en " + dateDeNaissance);

// 5.Afficher le résultat
document.write("Bonjour " + prenom + "tu as " + age + "!");
}

presentation();

