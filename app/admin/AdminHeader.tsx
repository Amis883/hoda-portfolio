"use client";

import { Bell, Search } from "lucide-react";

export default function AdminHeader() {
  return (
    <header className="flex items-center justify-between bg-zinc-900 border-b border-zinc-800 px-6 py-4">
      {/* search */}
      <div className="flex items-center gap-2 bg-zinc-800 px-3 py-2 rounded-md w-[250px]">
        <Search size={16} className="text-zinc-400" />
        <input
          placeholder="Search..."
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      {/* right section */}
      <div className="flex items-center gap-4">
        {/* notification */}
        <button className="relative">
          <Bell size={20} className="text-zinc-300" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* user */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-sm">
            H
          </div>
          <span className="text-sm text-zinc-300">Hoda</span>
        </div>
      </div>
    </header>
  );
}
