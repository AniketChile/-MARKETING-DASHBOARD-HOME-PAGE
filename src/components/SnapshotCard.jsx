export default function SnapshotCard({ title, items, alert = false }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      <ul className={`space-y-2 text-sm ${alert ? "text-red-600" : ""}`}>
        {items.map((item, idx) => (
          <li key={idx}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
