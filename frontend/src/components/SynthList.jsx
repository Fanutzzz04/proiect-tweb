import SynthCard from "./SynthCard.jsx";

export default function SynthList({ echipamente, onToggle, onDelete }) {
  if (echipamente.length === 0) {
    return <p className="empty">Nu există niciun echipament în listă.</p>;
  }

  return (
    <ul className="synth-list">
      {echipamente.map((synth) => (
        <SynthCard
          key={synth.id}
          synth={synth}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}