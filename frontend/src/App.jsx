import { useState } from "react";
import SynthList from "./components/SynthList.jsx";

// Datele temei proprii (doar valoarea de pornire)
const ECHIPAMENTE_INITIALE = [
  { id: 1, title: "Roland Juno-106", synthesis_type: "analog", owned: true },
  { id: 2, title: "Korg Minilogue xd", synthesis_type: "analog", owned: false },
  { id: 3, title: "Moog Mother-32", synthesis_type: "modular", owned: false },
];

// Tema de pornire a sistemului de operare
function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [echipamente, setEchipamente] = useState(ECHIPAMENTE_INITIALE);
  const [tema, setTema] = useState(temaInitiala);

  // Actualizare imutabilă prin comutarea câmpului owned
  function handleToggle(id) {
    setEchipamente((prev) =>
      prev.map((e) => (e.id === id ? { ...e, owned: !e.owned } : e))
    );
  }

  // Ștergere imutabilă prin filtrare după id
  function handleDelete(id) {
    setEchipamente((prev) => prev.filter((e) => e.id !== id));
  }

  // Comutare temă și aplicare pe atributul data-theme al tag-ului <html>
  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  // Valoare derivată: echipamentele care nu sunt deținute (wishlist)
  const active = echipamente.filter((e) => !e.owned).length;

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>

        <div className="header-container">
          <div className="brand">
            <span className="brand-logo">🎹</span>
            <div>
              <h1>SynthHub</h1>
              <p className="brand-sub">Gestiunea echipamentelor și sintetizatoarelor de studio</p>
            </div>
          </div>
          <div className="stats-badge">
            <span className="stat-item">
              Total: <strong>{echipamente.length}</strong>
            </span>
            <span className="stat-divider">|</span>
            <span className="stat-item">
              Wishlist: <strong>{active}</strong>
            </span>
          </div>
        </div>
      </header>

      <main className="app-container">
        <section className="card-panel">
          <div className="panel-header">
            <h2>Echipamentele mele</h2>
            <p>Listă interactivă cu state local (Etapa 5)</p>
          </div>

          <SynthList
            echipamente={echipamente}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </>
  );
}