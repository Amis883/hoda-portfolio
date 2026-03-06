"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
type SidebarProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};
export default function Sidebar({ open, setOpen }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname.startsWith(path);

  const linkStyle = (path: string) => ({
    padding: "8px 0",
    fontWeight: isActive(path) ? "bold" : "normal",
    color: isActive(path) ? "#4ade80" : "white",
  });

  return (
    <aside className="w-64 bg-zinc-900 min-h-screen p-6">
      <h2>ControlHub</h2>

      <nav
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Link href="/admin/dashboard" style={linkStyle("/admin/dashboard")}>
          Dashboard
        </Link>

        <Link href="/admin/users" style={linkStyle("/admin/users")}>
          Users
        </Link>

        <Link href="/admin/settings" style={linkStyle("/admin/settings")}>
          Settings
        </Link>
      </nav>
    </aside>
  );
}
