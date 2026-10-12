const echipamente = [
  { id: 1, titlu: "Korg Minilogue xd", detinut: true, sinteza: "analog" },
  { id: 2, titlu: "Roland JU-06A", detinut: false, sinteza: "digital" },
  { id: 3, titlu: "Behringer Neutron", detinut: true, sinteza: "modular" }
];

export default function App() {
  const detinute = echipamente.filter((e) => e.detinut).length;

  return (
    <>
      <header className="app-header">
        <div className="header-container">
          <div className="brand">
            <span className="brand-logo">⚡</span>
            <div>
              <h1>SynthHub</h1>
              <p className="brand-sub">Catalog & Manager Echipamente Audio</p>
            </div>
          </div>
          <div className="stats-badge">
            <span className="stat-item"><strong>{echipamente.length}</strong> Total</span>
            <span className="stat-divider">•</span>
            <span className="stat-item"><strong>{detinute}</strong> Deținute</span>
          </div>
        </div>
      </header>

      <main className="app-container">
        <section className="card-panel">
          <div className="panel-header">
            <h2>Colecția mea (Date Brute)</h2>
            <p>Afișare temporară în format JSON.</p>
          </div>
          <pre style={{ fontSize: '0.9rem', overflowX: 'auto', background: '#1e293b', color: '#f8fafc', padding: '1rem', borderRadius: '8px' }}>
            {JSON.stringify(echipamente, null, 2)}
          </pre>
        </section>
      </main>
    </>
  );
}