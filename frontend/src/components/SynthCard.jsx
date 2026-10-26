export default function SynthCard({ synth, onToggle, onDelete }) {
  return (
    <li className={synth.owned ? "synth-card done" : "synth-card"}>
      <label className="synth-main">
        <input
          type="checkbox"
          checked={synth.owned}
          onChange={() => onToggle(synth.id)}
        />
        <div>
          <h3>{synth.title}</h3>
          <span className={`badge badge-${synth.synthesis_type}`}>
            Tip sinteză: {synth.synthesis_type}
          </span>
        </div>
      </label>
      <button
        className="btn-danger"
        onClick={() => onDelete(synth.id)}
        aria-label={`Șterge ${synth.title}`}
      >
        Șterge
      </button>
    </li>
  );
}