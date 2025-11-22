import KPICard from "./KPICard";

export default function KPISection({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {data.map((kpi, idx) => (
        <KPICard key={idx} {...kpi} />
      ))}
    </div>
  );
}
