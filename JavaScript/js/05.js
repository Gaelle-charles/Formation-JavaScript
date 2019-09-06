// INCREMENTATION

var nb1 = 1;
nb1 = nb1  + 1;
//  méthode 1 - POUR AJOUTER 1
nb1++;

nb1 = 1;
nb1 = nb1  + 2;
//  méthode 2
nb1 +=2;  // J'ajoute +2 à nb1
nb1 +=5;  // J'ajoute +5 à nb1


// DECREMENTATION

var nb1 = 1;
nb1 = nb1  - 1;
// autre méthode 
nb1--;

// autre méthode
nb1 -=2;  // Je retire +2 à nb1

// SUBTILITE

nb1 = 0;
console.log(nb1++); // = 0 (car nb1 apparait avant l'incrementation)
console.log(nb1); // 1

nb1 = 0;
console.log(++nb1); // = 1 (car ++ (donc 1) apparait avant l'incrementation)