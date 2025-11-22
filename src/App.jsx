import { useState } from "react";
import data from "./data/dashboardData.json";


import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import KPISection from "./components/KPISection";
import LineChartCard from "./components/LineChartCard";
import BarChartCard from "./components/BarChartCard";
import PieChartCard from "./components/PieChartCard";
import SnapshotCard from "./components/SnapshotCard";


export default function App() {
const [search, setSearch] = useState("");


return (
<div className="min-h-screen bg-gray-100 p-6 space-y-6">
<Navbar />
<SearchBar value={search} onChange={setSearch} />


<KPISection data={data.kpis} />


<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<LineChartCard data={data.lineChart} />
<BarChartCard data={data.barChart} />
</div>


<PieChartCard data={data.deviceSplit} />


<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<SnapshotCard title="Top Campaigns" items={data.topCampaigns.map(t => `${t.title} - ${t.metric}`)} />
<SnapshotCard title="Recent Activities" items={data.activities} />
<SnapshotCard title="Alerts" items={data.alerts} alert={true} />
</div>
</div>
);
}