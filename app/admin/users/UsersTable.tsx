"use client";
import { useState } from "react";
import { users } from "@/data/users";
import StatusBadge from "@/components/ui/StatusBadge";
export default function UsersTable() {
  const [search, setSearch] = useState("");
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          marginBottom: "20px",
          padding: "8px",
          width: "250px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", paddingBottom: "10px" }}>Name</th>
            <th style={{ textAlign: "left", paddingBottom: "10px" }}>Email</th>
            <th style={{ textAlign: "left", paddingBottom: "10px" }}>Status</th>
            <th style={{ textAlign: "left", paddingBottom: "10px" }}>Role</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <StatusBadge status={user.status as "active" | "suspended"} />
              </td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
