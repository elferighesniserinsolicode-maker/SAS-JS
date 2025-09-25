let choice;

do {
  choice = prompt("Entrez un code de compétence (c1 à C8) ou '0' pour quitter :");

  switch (choice) {
    case "C1":
      alert("Compétence 1 : Communication efficace");
      break;

    case "2":
      alert("Compétence 2 : Travail en équipe");
      break;

    case "3":
      alert("Compétence 3 : Résolution de problèmes");
      break;

    case "4":
      alert("Compétence 4 : Gestion du temps");
      break;

    case "5":
      alert("Compétence 5 : Pensée critique");
      break;

    case "6":
      alert("Compétence 6 : Créativité et innovation");
      break;

    case "7":
      alert("Compétence 7 : Adaptabilité");
      break;

    case "8":
      alert("Compétence 8 : Utilisation des outils numériques");
      break;

    case "EXIT":
      alert("Programme terminé ");
      break;

    default:
      alert("Cette compétence n'existe pas ");
  }

} while (choice !== "EXIT");
