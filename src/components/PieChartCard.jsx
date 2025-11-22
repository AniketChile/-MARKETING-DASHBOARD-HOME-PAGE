import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#4F46E5", "#06B6D4"];
function CustomPieTooltip({ active, payload }) {
  if (!active || !payload || payload.length === 0) return null;

  const { name, value } = payload[0];

  return (
    <div className="bg-white shadow-md rounded-lg px-3 py-2 border text-sm">
      <div className="font-semibold text-gray-800">{name}</div>
      <div className="text-gray-600">{value}%</div>
    </div>
  );
}

export default function PieChartCard({ data }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Device Split</h2>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Tooltip content={<CustomPieTooltip />} />

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={90}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
