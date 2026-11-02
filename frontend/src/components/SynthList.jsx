import SynthCard from "./SynthCard.jsx";

export default function SynthList({ synthuri = [], onToggle, onDelete }) {
  if (synthuri.length === 0) {
    return <p className="empty">Nu există niciun echipament în listă.</p>;
  }

  return (
    <ul className="synth-list">
      {synthuri.map((synth) => (
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