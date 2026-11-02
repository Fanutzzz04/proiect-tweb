import { useEffect, useState } from "react";
import SynthList from "./components/SynthList.jsx";
import { fetchSynthuri } from "./api.js";

// Tema de pornire a sistemului de operare (Etapa 5)
function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  // Stările pentru date, încărcare și eroare (Etapa 6)
  const [synthuri, setSynthuri] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Starea pentru tema interfeței (Etapa 5)
  const [tema, setTema] = useState(temaInitiala);

  // Încărcarea datelor de la API la montarea componentei
  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await fetchSynthuri();
        if (!ignore) setSynthuri(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, []);

  // Actualizare imutabilă prin comutarea câmpului owned
  function handleToggle(id) {
    setSynthuri((prev) =>
      prev.map((s) => (s.id === id ? { ...s, owned: !s.owned } : s))
    );
  }

  // Ștergere imutabilă prin filtrare după id
  function handleDelete(id) {
    setSynthuri((prev) => prev.filter((s) => s.id !== id));
  }

  // Comutarea temei luminoase / întunecate
  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  // Valoare derivată: echipamentele care nu sunt deținute (wishlist)
  const active = synthuri.filter((s) => !s.owned).length;

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
              Total: <strong>{synthuri.length}</strong>
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
            <p>Listă sincronizată prin API</p>
          </div>

          {/* Starea de încărcare */}
          {loading && <p className="info">Se încarcă echipamentele...</p>}

          {/* Starea de eroare */}
          {error && (
            <p className="error">
              Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
            </p>
          )}

          {/* Afișarea listei doar după finalizarea cu succes a încărcării */}
          {!loading && !error && (
            <SynthList
              synthuri={synthuri}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          )}
        </section>
      </main>
    </>
  );
}