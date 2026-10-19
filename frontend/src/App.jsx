
const echipamente = [
  
  { id: 1, nume: "Roland Juno-106", tip: "analog", gata: true },
  { id: 2, nume: "Korg Minilogue XD", tip: "analog", gata: false },
  { id: 3, nume: "Moog Mother-32", tip: "modular", gata: false }
];

export default function App() {
  
  const active = echipamente.filter((e) => !e.gata).length;

  return (
    <>
      <header className="app-header">
        <div className="header-container">
          <div className="brand">
            <span className="brand-logo">🎹</span>
            <div>
              <h1>Studio Gear</h1>
              <p className="brand-sub">Gestiunea echipamentelor și sintetizatoarelor de studio</p>
            </div>
          </div>
          <div className="stats-badge">
            <span className="stat-item">
              Total: <strong>{echipamente.length}</strong>
            </span>
            <span className="stat-divider">|</span>
            <span className="stat-item">
              Active / Wishlist: <strong>{active}</strong>
            </span>
          </div>
        </div>
      </header>

      <main className="app-container">
        <section className="card-panel">
          <div className="panel-header">
            <h2>Echipamentele mele</h2>
            <p>Date brute preluate din componentă (Etapa 3)</p>
          </div>
          {/* Afișarea temporară JSON conform ghidului */}
          <pre>{JSON.stringify(echipamente, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}