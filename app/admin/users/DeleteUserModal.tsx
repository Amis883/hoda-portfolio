"use client";

import type { User } from "@/data/users";

type Props = {
  open: boolean;
  user: User | null;
  onClose: () => void;
  onConfirm: (id: number) => void;
};

export default function DeleteUserModal({
  open,
  user,
  onClose,
  onConfirm,
}: Props) {
  if (!open || !user) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-zinc-900 p-6 rounded-lg w-[400px] space-y-4">
        <h2 className="text-lg font-semibold text-red-400">Delete User</h2>

        <p className="text-sm text-zinc-300">
          Are you sure you want to delete
          <span className="font-semibold"> {user.name}</span>?
        </p>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-3 py-1 bg-zinc-700 rounded hover:bg-zinc-600"
          >
            Cancel
          </button>

          <button
            onClick={() => onConfirm(user.id)}
            className="px-3 py-1 bg-red-500 text-black rounded hover:bg-red-400"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
