export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm">
      <div className="text-xl font-bold"><img 
          src="/logo.svg" 
          alt="Logo" 
          className="h-8 w-auto"
        /></div>
      <ul className="flex gap-6 text-gray-700 font-medium hover: cursor-pointer">
        <li>Dashboard</li>
        <li>Campaigns</li>
        <li>Analytics</li>
        <li>Settings</li>
        
      </ul>
      <div className="w-10 h-10 rounded-full bg-gray-300 flex justify-center p-3 hover: cursor-pointer">
      <i class="fa-regular fa-user "></i>
        </div>
      
      
    </nav>
  );
}
