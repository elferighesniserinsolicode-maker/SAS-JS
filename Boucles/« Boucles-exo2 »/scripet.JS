let somme = 0;        
let compteur = 0
while (true) {
    let note = parseInt(prompt("Entrez une note (ou -1 pour arrêter) :"));

    if (note === -1) {
        break; // arrêter la saisie
    }

    if (note >= 0 && note <= 20) {
        somme += note;
        compteur++;
    } else {
        alert("Note non valide !");
    }
}

if (compteur > 0) {
    let moyenne = somme / compteur;
    alert(`Nombre de notes = ${compteur}, moyenne = ${moyenne.toFixed(2)}`);
} else {
    alert("Aucune note valide saisie !");
}
