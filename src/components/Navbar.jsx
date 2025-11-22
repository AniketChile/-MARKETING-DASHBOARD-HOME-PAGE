import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white p-4 rounded-2xl shadow-sm">
      <div className="flex items-center justify-between">
        <img 
          src="/logo.svg" 
          alt="Logo" 
          className="h-8 w-auto"
        />

        <ul className="hidden md:flex gap-6 text-gray-700 font-medium cursor-pointer">
          <li>Dashboard</li>
          <li>Campaigns</li>
          <li>Analytics</li>
          <li>Settings</li>
        </ul>

        <div className="hidden md:flex w-10 h-10 rounded-full bg-gray-300 justify-center p-3 cursor-pointer">
          <i className="fa-regular fa-user"></i>
        </div>

        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setOpen(!open)}
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>

      {open && (
        <ul className="mt-4 md:hidden flex flex-col gap-4 text-gray-700 font-medium">
          <li>Dashboard</li>
          <li>Campaigns</li>
          <li>Analytics</li>
          <li>Settings</li>

          <div className="w-10 h-10 rounded-full bg-gray-300 flex justify-center p-3 cursor-pointer">
            <i className="fa-regular fa-user"></i>
          </div>
        </ul>
      )}
    </nav>
  );
}
