// LES FONCTIONS

// déclarer une fonction
function bonjour() {
    //alert ('Bonjour'); // les instructions se font dans les ()
}

//les instructions ne seront exécutées que lorsque ma fonction sera appelée.

bonjour(); // pour que la fonction apparaisse sur la page html


function ditBonjour( prenom , nom ){

    console.log(prenom + ''+ nom);
    document.write(
        'Bonjour <strong>'
        + prenom
        + ''
        + nom
        + '</strong> ! <br>'

    );
}

ditBonjour('Gaëlle ' , 'CHARLES-BELAMOUR');
ditBonjour('Nia ' , 'VITALIS');

nb1 = 15;
nb2 = 20;

function somme ( nb1 , nb2 ){
    console.log(nb1 + nb2);
    
    document.write(
        'Le résutat est de '
        +
        (nb1 + nb2)
    );
}

somme(nb1 , nb2);


// CORRECTION

function somme (nb1 , nb2){
    var resultat = nb1 + nb2 ;
    console.log(resultat);
    return resultat;
}

var resultatDeMaFonction= somme (50 , 5);

//alert (resultatDeMaFonction);


function prixTTC (prixHT , tva){
    return montantTTC + (prixHT / (100 * tva)) ;
    console.log(montantTTC) ;
  
}

var montantTTC= prixTTC (200, 5.5);

// CORRECTION

function calculTva (montantHt, tauxTva = 8.5){
    return montantHt + ( montantHt * (tauxTva / 100 ));
}

var montantTtc1 =  calculTva(10); //(montantHt)
var montantTtc2 = calculTva(10, 5.5); // ( montantHt, tx tva)
var montantTtc3 = calculTva(10, 20); // ( montantHt, tx tva)

console.log( montantTtc1);
console.log( montantTtc2);
console.log( montantTtc3);


// EXERCICE

function conversion ( montant, devise){
    return montant * devise ; 
}

var montanEuro = conversion (100, 1.1035);
var montantDollar = conversion (100, 0.9061);

console.log (montanEuro);
console.log (montantDollar);

// CORRECTION 

function convertEurtoUsd ( montantEuro, tauxconversionUsd = 1.1035){
    return montantEuro * tauxconversionUsd;
}

var montantEur = 20;
var montantUsd = convertEurtoUsd (montantEur);
console.log(
    montantEur
    + ' € en dollars donne : '
    + montantUsd
    + ' $'
    );
