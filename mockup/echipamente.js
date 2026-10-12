
const echipamente = [
  { id: 1, titlu: "Korg Minilogue xd", detinut: true, sinteza: "analog" },
  { id: 2, titlu: "Roland JU-06A", detinut: false, sinteza: "digital" },
  { id: 3, titlu: "Behringer Neutron", detinut: true, sinteza: "modular" }
];

const TIPURI_SINTEZA = ["analog", "digital", "modular"];


function listeazaTitluri(lista) {
  return lista.map((e) => e.titlu);
}


function numaraWishlist(lista) {
  return lista.filter((e) => !e.detinut).length;
}


function cautaDupaTitlu(lista, text) {
  return lista.filter((e) => 
    e.titlu.toLowerCase().includes(text.toLowerCase())
  );
}


function nextId(lista) {
  return lista.reduce((max, e) => Math.max(max, e.id), 0) + 1;
}


function adaugaEchipament(lista, titlu, sinteza) {
  const titluCurat = titlu.trim();
  

  if (titluCurat === "") {
    console.log("Eroare validare: Titlul nu poate fi gol.");
    return lista;
  }
  

  if (!TIPURI_SINTEZA.includes(sinteza)) {
    console.log(`Eroare validare: Tipul '${sinteza}' este invalid.`);
    return lista;
  }

  const nouEchipament = {
    id: nextId(lista),
    titlu: titluCurat,
    detinut: true,
    sinteza: sinteza
  };

  
  return [...lista, nouEchipament];
}


function comutaDetinere(lista, id) {
  return lista.map((e) => 
    e.id === id ? { ...e, detinut: !e.detinut } : e
  );
}


function stergeEchipament(lista, id) {
  return lista.filter((e) => e.id !== id);
}


console.log("--- Citire ---");
console.log("Titluri:", listeazaTitluri(echipamente).join(", "));
console.log("În Wishlist:", numaraWishlist(echipamente));
console.log("Căutare 'korg':", listeazaTitluri(cautaDupaTitlu(echipamente, "korg")).join(", "));

console.log("\n--- Adăugare ---");
let listaNoua = adaugaEchipament(echipamente, "Moog Sub 37", "analog");
console.log("Lista nouă are:", listaNoua.length, "echipamente");
console.log("Originalul a rămas cu:", echipamente.length, "echipamente");

console.log("\n--- Modificare și ștergere ---");
listaNoua = comutaDetinere(listaNoua, 1);
console.log("După debifarea ID-ului 1, în wishlist:", numaraWishlist(listaNoua));

listaNoua = stergeEchipament(listaNoua, 3);
console.log("După ștergerea ID-ului 3:", listeazaTitluri(listaNoua).join(", "));

console.log("\n--- Validare ---");
adaugaEchipament(listaNoua, "   ", "analog"); 
adaugaEchipament(listaNoua, "Yamaha DX7", "fm");