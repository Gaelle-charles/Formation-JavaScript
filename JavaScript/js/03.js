// LA CONCATENATION


var debutDePhrase = "Aujourd'hui ";
var DateDuJour = new Date();
var suiteDePhrase = ', sont présent : ';
var nbApprenantes = 14;
var finDePhrase = '  apprenantes.<br>';


document.write(
    debutDePhrase + DateDuJour.getDate()
                  +'/'
                  +(DateDuJour.getMonth()+1)
                  +'/'
                  +DateDuJour.getFullYear()
                  +suiteDePhrase
                  +nbApprenantes
                  + finDePhrase
);