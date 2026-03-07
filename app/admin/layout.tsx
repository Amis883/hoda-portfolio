"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import { Toaster } from "react-hot-toast";
import AdminHeader from "./AdminHeader";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="p-4 md:p-8">
          {children} <Toaster position="top-right" />
        </main>
      </div>
    </div>
  );
}
