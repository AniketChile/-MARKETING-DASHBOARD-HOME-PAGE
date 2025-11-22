import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-sm w-full max-w-xl mx-auto">
      <Search className="text-gray-500" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search campaigns..."
        className="w-full outline-none bg-transparent"
      />
    </div>
  );
}
