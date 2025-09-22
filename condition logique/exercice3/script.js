// Demander à l’utilisateur un nombre entre 1 et 7
let nombre = parseInt(prompt("Entrez un nombre entre 1 et 7 :"));

// Vérifier avec if / else if
if (nombre === 1) {
  alert("Lundi");
} else if (nombre === 2) {
  alert("Mardi");
} else if (nombre === 3) {
  alert("Mercredi");
} else if (nombre === 4) {
  alert("Jeudi");
} else if (nombre === 5) {
  alert("Vendredi");
} else if (nombre === 6) {
  alert("Samedi");
} else if (nombre === 7) {
  alert("Dimanche");
} else {
  alert("Numéro invalide");
}
