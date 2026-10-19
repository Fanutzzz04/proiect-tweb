// frontend/src/App.jsx
import SynthList from "./components/SynthList.jsx";

const echipamente = [
  { id: 1, title: "Roland Juno-106", synthesis_type: "analog", owned: true },
  { id: 2, title: "Korg Minilogue xd", synthesis_type: "analog", owned: false },
  { id: 3, title: "Moog Mother-32", synthesis_type: "modular", owned: false }
];

export default function App() {
  const active = echipamente.filter((e) => !e.owned && !e.gata).length;

  return (
    <>
      <header className="app-header">
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
            <p>Listă generată din componente React (Etapa 4)</p>
          </div>
          
          <SynthList echipamente={echipamente} />
        </section>
      </main>
    </>
  );
}