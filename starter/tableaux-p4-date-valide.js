/*
TABLEAUX - PRÉPA 4 : Date valide - version 3
- Déclarez deux fonctions :
    - La première fonction 'isBissextile' retourne true ou false selon que l'année est bissextile ou pas.
    - La deuxième fonction 'isValid' retourne true ou false selon que la date est valide ou pas.
    Stockez cette fois le nombre maximum de jours autorisé par mois dans un tableau (utilisez 'isBissextile' pour gérer le cas du mois de février).
- Utilisez 'isValid' pour décider si votre date est valide avant d'afficher votre message dans la console.
*/

// Fonction pour vérifier si une année est bissextile
function isBissextile(annee) {
    // Code pour déterminer si 'annee' est bissextile
    if (annee%4===0 && annee%100!==0){
        return true;
    } else if (annee%400===0){
        return true;
    } else {
        return false;
    }
}

/*
// Fonction pour vérifier si une date est valide
function isValid(jour, mois, annee) {
    const maxDays = {
        1 : 31,
        2 : 28,
        3 : 31,
        4 : 30,
        5 : 31,
        6 : 30,
        7 : 31,
        8 : 31,
        9 : 30,
        10 : 31,
        11 : 30,
        12: 31
}
    // Code pour vérifier si la date (jour, mois, annee) est valide
    if (isNaN(jour) || isNaN(mois) || isNaN(annee) || jour <= 0 || mois <= 0 || annee <= 0 || mois >12 || this.[2]) {
        return false;
    }else if (jour > 0 && jour < maxDays) {
        return true;
    } else {
        return false;
    }
}

// Utilisez 'isValid' pour vérifier si une date est valide avant d'afficher un message dans la console


console.log(isValid(37, 12, 2012));*/

function isValid (jour, mois, annee){
    const maxDays = [31, isBissextile(annee)? 29 :28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (isNaN(jour) || isNaN(mois) || isNaN(annee) || jour <= 0 || mois <= 0 || annee <= 0 || mois >12) {
        return false;
    }else if (jour > 0 && jour < maxDays) {
        return true;
    } else {
        return false;
    }
}

console.log(isValid(5,11, 2004))