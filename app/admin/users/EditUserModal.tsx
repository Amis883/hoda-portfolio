"use client";

import { useState, useEffect } from "react";
import type { User } from "@/data/users";

type Props = {
  open: boolean;
  user: User | null;
  onClose: () => void;
  onSave: (user: User) => void;
};

export default function EditUserModal({ open, user, onClose, onSave }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  if (!open || !user) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-zinc-900 p-6 rounded-lg w-[400px] space-y-4">
        <h2 className="text-lg font-semibold">Edit User</h2>

        <input
          className="w-full bg-zinc-800 p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full bg-zinc-800 p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1 bg-zinc-700 rounded">
            Cancel
          </button>

          <button
            onClick={() =>
              onSave({
                ...user,
                name,
                email,
              })
            }
            className="px-3 py-1 bg-green-500 text-black rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
