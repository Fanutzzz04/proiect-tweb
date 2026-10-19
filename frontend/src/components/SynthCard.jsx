
const ETICHETE_TIP = {
  analog: "Analog",
  digital: "Digital",
  modular: "Modular"
};

export default function SynthCard({ item }) {
  const isDone = item.owned || item.gata;

  return (
    <li className={isDone ? "synth-card is-done" : "synth-card"}>
      <div className="synth-info">
        <h3>{item.title || item.nume}</h3>
        <span className={`pill pill-${item.synthesis_type || item.tip}`}>
          {ETICHETE_TIP[item.synthesis_type || item.tip] || item.synthesis_type || item.tip}
        </span>
      </div>
      <span className="status-tag">
        {isDone ? "Deținut" : "Wishlist"}
      </span>
    </li>
  );
}