"use client";

import { useState } from "react";
import type { User } from "@/data/users";

type Props = {
  open: boolean;
  onClose: () => void;
  onAdd: (user: Omit<User, "id">) => void;
};

export default function AddUserModal({ open, onClose, onAdd }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-zinc-900 w-[420px] rounded-xl p-6 space-y-4 border border-zinc-800">
        <h2 className="text-lg font-semibold text-white">Add User</h2>

        <input
          className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm bg-zinc-700 hover:bg-zinc-600 rounded-md"
          >
            Cancel
          </button>

          <button
            disabled={!name.trim() || !email.trim()}
            className="bg-green-500 disabled:bg-zinc-700 px-4 py-2 rounded-md"
            type="button"
            onClick={() => {
              if (!name.trim() || !email.trim()) return;

              onAdd({
                name,
                email,
                status: "active",
                role: "user",
              });

              setName("");
              setEmail("");
              onClose();
            }}
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
}
