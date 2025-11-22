import { motion } from "framer-motion";

export default function KPICard({ label, value, trend }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white p-4 rounded-2xl shadow-sm"
    >
      <div className="text-gray-500 text-sm">{label}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
      <div
        className={`text-sm mt-1 ${
          trend.includes("-") ? "text-red-500" : "text-green-500"
        }`}
      >
        {trend}
      </div>
    </motion.div>
  );
}
