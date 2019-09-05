// Déclarer un tableau indexé
var montableau=[];
var myArray= new Array; // une autre façon d'indexé un tableau

montableau[0]='Hugo';
montableau[1]='Rosemaël';
montableau[2]='Aurélie';
montableau[3]='Elodie';

console.log( montableau);
console.log( montableau[2]);// Aurélie
console.log( montableau[3]); // Elodie

var nosPrenoms=[
    'Nia',
    'Léna',
    'Astrid',
    'Gaëlle',
    'Cindy',
    'Catherine'
];

console.log(nosPrenoms);


//  CREER UN OBJET EN JS

var coordonnee = {
    // Propriété   : valeur ,
    prenom : 'Gaëlle',
    nom : 'CHARLES-BELAMOUR',
    age : 30,
    tel : '0690 94 63 26'
};

console.clear();
console.log(coordonnee);
console.log(coordonnee ['prenom']);
console.log(coordonnee.prenom); // Ecriture à privilégier


var annuaireDesApprenantes = [
    ['Nia','VITALIS'],
    ['Angélique', 'JEAN-NOEL']
];

console.log( annuaireDesApprenantes[0][0] );
console.log( annuaireDesApprenantes[1][0] );
console.log( annuaireDesApprenantes );

annuaireDesApprenantes = [
    {
        prenom : 'Laureen',
        nom : 'LABUTHIE',
    },
    {
        prenom : 'Rosemaël',
        nom : 'ANTHONY',
    },
    {
        prenom : 'Katharyna',
        nom : 'LUCINA',
    }

];

console.clear();
console.log ( annuaireDesApprenantes );
console.log (annuaireDesApprenantes[1]['prenom']);


console.log (annuaireDesApprenantes[0].prenom);
console.log (annuaireDesApprenantes[0].nom);

console.log (annuaireDesApprenantes[1].prenom);
console.log (annuaireDesApprenantes[1].nom);

console.log (annuaireDesApprenantes[2].prenom);
console.log (annuaireDesApprenantes[2].nom);


var contacts = [
    {
        prenom: 'Hugo',
        nom: 'LIEGEARD',
        coordonnees: {
            adresse: {
                rue: 'Euvremont Gène',
                cp: '97110',
                ville: 'Pointe-à-Pitre',
                departement: 'Guadeloupe',
                pays: {
                    nom: 'France',
                    code: 'FR'
                }
            },
            email: 'wf3@hl-media.fr',
            tel: {
                fixe: '0596 108 328',
                fax: '0596 108 632',
                port: '0783 97 15 15'
            }
        }
    },
    {
        prenom: 'Nia',
        nom: 'VITALIS',
        coordonnees: {
            adresse: {
                rue: 'Les Plaines',
                cp: '97139',
                ville: 'Les Abymes',
                departement: 'Guadeloupe',
                pays: {
                    nom: 'France',
                    code: 'FR'
                }
            },
            email: 'nia971@gmail.com',
            tel: {
                fixe: '',
                fax: '',
                port: '0690 12 20 07'
            }
        }
    }
];

console.clear();
console.log( contacts );

console.log( contacts[0].coordonnees.adresse.pays.nom );
console.log( contacts[1].coordonnees.adresse.pays.nom );


// EXERCICE

var recette = [
    {
        NomRecette :'Dombré de ouassous',
        Composition : {
            Viande : 'ouassous',
            Feculent : 'farine',
            Sauce : 'tomate',
            Legumes : 'pomme de terre'
        },
        Duree : '1h',
        Nombrepersonne : 2
    },
    {
        NomRecette :'Colombo de cabri',
        Composition : {
            Viande : 'le cabri',
            Feculent : 'riz',
            Sauce : 'massalé',
            Legumes : 'pomme de terre'
        },
        Duree : '1h',
        Nombrepersonne : 4
    },
    {
        NomRecette :'gratin de bananes',
        Composition : {
            Viande  : 'lardons',
            Feculent : 'pomme de terre',
            Sauce : 'creme fraiche',
            Legumes : 'banane'
        },
        Duree : '1h',
        Nombrepersonne : 2
    }
];


console.clear();
console.log( recette );
console.log( recette[0].Composition.Feculent );


/* Un objet  respecte toujours le format
{
    propriété : valeur
} 
ou la valeur peut être de plusieurs types :
{
    unBooleen: true,
    unNombre: 18,
    unString: 'Je suis en string',
    unObjet: {
        propriété: valeur,
    },
    unTableau: [
        'Matthieu', 'Marc', 'Luc', 'Hugo', 'Jean'
    ]
}
*/


//  AJOUTER UN NOUVEL ELEMENT

var couleurs = ['Rouge', 'Jaune', 'Vert'];
console.log( couleurs );

couleurs.push('Bleu');
console.log(couleurs);

couleurs.unshift('Orange'); // Ajoute au début du tableau
console.log(couleurs);


// SORTIR UN ELEMENT DU TABLEAU

/* La fonction pop() supprime le dernier élément d'un tableau et retourne cet élément.*/

couleurs.pop();
console.log(couleurs);

/* 
La fonction shift() pour sortir le premier éléments

La fonction splice() permet de faire sortir un ou plusieurs éléments 
du tableau */

