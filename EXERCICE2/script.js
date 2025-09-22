let note = prompt("Donnez une note entre 0 et 20 :");
note = Number(note);
if (note < 10) {
  alert("Insuffisant");
} else if (note >= 10 && note <= 12) {
  alert("Passable");
} else if (note > 12 && note <= 20) {
  alert("Bien");
} else {
  alert("Erreur : veuillez entrer une note valide entre 0 et 20.");
}
