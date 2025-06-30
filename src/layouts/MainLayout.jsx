import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div id="app-container" className="bg-base-300 min-h-screen flex flex-col md:flex-row">
      {/* Sidebar untuk desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      {/* Sidebar untuk mobile */}
      <div className={`fixed inset-0 z-40 md:hidden transition-transform duration-200 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="absolute inset-0 bg-black opacity-50" onClick={() => setSidebarOpen(false)} />
        <div className="relative z-50 w-64 bg-base-100 h-full">
          <Sidebar />
        </div>
      </div>
      <div id="main-content" className="flex-1 p-4">
        {/* Hamburger menu untuk mobile */}
        <button
          className="md:hidden mb-4"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <svg width="32" height="32" fill="currentColor">
            <path d="M4 8h24M4 16h24M4 24h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
