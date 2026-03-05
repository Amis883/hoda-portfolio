"use client";
import { useState } from "react";
import { users } from "@/data/users";
import StatusBadge from "@/components/ui/StatusBadge";
type SortField = "name" | "email";
export default function UsersTable() {
  //Search
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  //Sort

  const [sortField, setSortField] = useState<"name" | "email">("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 2;

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || user.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const valueA = a[sortField];
    const valueB = b[sortField];
    if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
    if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const paginatedUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(sortedUsers.length / usersPerPage);
  return (
    <div>
      <div style={{ marginBottom: "15px", display: "flex", gap: "12px" }}>
        <button onClick={() => setStatusFilter("all")}>All</button>
        <button onClick={() => setStatusFilter("active")}>Active</button>
        <button onClick={() => setStatusFilter("pending")}>Pending</button>
        <button onClick={() => setStatusFilter("suspended")}>Suspended</button>
      </div>
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
            <th
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSortField("name");
                setSortDirection(sortDirection === "asc" ? "desc" : "asc");
              }}
            >
              Name
              {sortField === "name" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSortField("email");
                setSortDirection(sortDirection === "asc" ? "desc" : "asc");
              }}
            >
              Email{" "}
              {sortField === "email" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>
            <th style={{ textAlign: "left", paddingBottom: "12px" }}>Status</th>
            <th style={{ textAlign: "left", paddingBottom: "12px" }}>Role</th>
          </tr>
        </thead>

        <tbody>
          {paginatedUsers.length === 0 ? (
            <tr>
              <td
                colSpan={4}
                style={{
                  padding: "20px",
                  textAlign: "center",
                  color: "#9ca3af",
                }}
              >
                No users found
              </td>
            </tr>
          ) : (
            paginatedUsers.map((user) => (
              <tr
                key={user.id}
                style={{
                  borderBottom: "1px solid #1f2937",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#111")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <td style={{ padding: "12px 8px" }}>{user.name}</td>
                <td style={{ padding: "12px 8px" }}>{user.email}</td>
                <td style={{ padding: "12px 8px" }}>
                  <StatusBadge status={user.status as "active" | "suspended"} />
                </td>
                <td style={{ padding: "12px 8px" }}>{user.role}</td>
              </tr>
            ))
          )}
        </tbody>
        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}>
            Prev
          </button>

          <span>Page {currentPage}</span>

          <button
            onClick={() =>
              setCurrentPage((p) =>
                indexOfLastUser < sortedUsers.length ? p + 1 : p,
              )
            }
          >
            Next
          </button>
        </div>
      </table>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
