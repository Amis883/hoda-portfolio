"use client";
import { useState } from "react";
import StatusBadge from "@/components/ui/StatusBadge";
import AddUserModal from "./AddUserModal";
import { users as initialUsers } from "@/data/users";
import type { User } from "@/data/users";

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
  const usersPerPage = 100;
  //Modal
  const [showModal, setShowModal] = useState(false);
  const [usersState, setUsersState] = useState<User[]>(initialUsers);
  const filteredUsers = usersState.filter((user) => {
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
  const totalUsers = sortedUsers.length;

  const startUser = indexOfFirstUser + 1;
  const endUser = Math.min(indexOfLastUser, totalUsers);
  const addUser = (newUser: Omit<User, "id">) => {
    setUsersState((prev) => {
      const updated = [
        ...prev,
        {
          id: Date.now(),
          ...newUser,
        },
      ];

      setCurrentPage(Math.ceil(updated.length / usersPerPage));

      return updated;
    });
  };
  return (
    <div>
      <div className="flex items-center justify-between my-4">
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-500 hover:bg-green-400 text-black px-4 py-2 rounded-md text-sm font-medium"
        >
          + Add User
        </button>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-sm w-64"
        />

        <div className="flex gap-2">
          <button
            onClick={() => setStatusFilter("all")}
            className="px-3 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-sm"
          >
            All
          </button>

          <button
            onClick={() => setStatusFilter("active")}
            className="px-3 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-sm"
          >
            Active
          </button>

          <button
            onClick={() => setStatusFilter("pending")}
            className="px-3 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-sm"
          >
            Pending
          </button>

          <button
            onClick={() => setStatusFilter("suspended")}
            className="px-3 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-sm"
          >
            Suspended
          </button>
        </div>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left text-sm text-zinc-400">
            <th
              className="cursor-pointer pb-3"
              onClick={() => {
                setSortField("name");
                setSortDirection(sortDirection === "asc" ? "desc" : "asc");
              }}
            >
              Name{" "}
              {sortField === "name" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>

            <th
              className="cursor-pointer pb-3"
              onClick={() => {
                setSortField("email");
                setSortDirection(sortDirection === "asc" ? "desc" : "asc");
              }}
            >
              Email{" "}
              {sortField === "email" && (sortDirection === "asc" ? "↑" : "↓")}
            </th>

            <th className="text-left pb-3">Status</th>
            <th className="text-left pb-3">Role</th>
          </tr>
        </thead>

        <tbody>
          {paginatedUsers.length === 0 ? (
            <tr>
              <td colSpan={4} className="py-6 text-center text-zinc-400">
                No users found
              </td>
            </tr>
          ) : (
            paginatedUsers.map((user) => (
              <tr
                key={user.id}
                className="border-b border-zinc-800 hover:bg-zinc-900 transition"
              >
                <td className="py-3 px-2">{user.name}</td>

                <td className="py-3 px-2">{user.email}</td>

                <td className="py-3 px-2">
                  <StatusBadge
                    status={user.status as "active" | "pending" | "suspended"}
                  />
                </td>

                <td className="py-3 px-2">{user.role}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="mt-3 text-zinc-400 text-sm">
        Showing {startUser}–{endUser} of {totalUsers} users
      </div>
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
      <AddUserModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onAdd={addUser}
      />
    </div>
  );
}
