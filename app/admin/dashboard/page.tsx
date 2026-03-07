"use client";

import { users } from "@/data/users";
import StatCard from "./StatCard";
import UsersChart from "./UserChart";

export default function DashboardPage() {
  const totalUsers = users.length;

  const activeUsers = users.filter((u) => u.status === "active").length;
  const pendingUsers = users.filter((u) => u.status === "pending").length;
  const suspendedUsers = users.filter((u) => u.status === "suspended").length;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <UsersChart />
        <StatCard title="Total Users" value={totalUsers} />

        <StatCard title="Active Users" value={activeUsers} />

        <StatCard title="Pending Users" value={pendingUsers} />

        <StatCard title="Suspended Users" value={suspendedUsers} />
      </div>
    </div>
  );
}
