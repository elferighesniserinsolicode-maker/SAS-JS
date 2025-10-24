let livres = [
  { titre: "Livre Harry Potter", auteur: "Auteur J.K. Rowling", prix: 80 },
  { titre: "L'Étranger", auteur: "Albert Camus", prix: 120 },
  { titre: "LA boîte merveille", auteur: "Auteur AHEMADE SEFERUI", prix: 150 }
];


livres.forEach((livre)=> console.log(livre.titre +" "+ livre.auteur));

//totale des prix;
let total=0;
livres.forEach((livre)=> total+= livre.prix);
console.log("le total:"+ total);

//livres avec prix supérieur100;
livres.forEach((livre)=> {if(livre.prix>=100){console.log(livre.titre);}});
let taille= livres.length;
console.log(livres[taille -1].titre);