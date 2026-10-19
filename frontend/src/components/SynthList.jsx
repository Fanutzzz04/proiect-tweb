import SynthCard from "./SynthCard.jsx";

export default function SynthList({ echipamente }) {
 
  if (!echipamente || echipamente.length === 0) {
    return <p className="empty-message">Nu există niciun echipament în colecție.</p>;
  }


  return (
    <ul className="synth-list">
      {echipamente.map((item) => (
        <SynthCard key={item.id} item={item} />
      ))}
    </ul>
  );
}