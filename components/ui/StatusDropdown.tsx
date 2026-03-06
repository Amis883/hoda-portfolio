"use client";

import type { UserStatus } from "@/data/users";

type Props = {
  status: UserStatus;
  onChange: (status: UserStatus) => void;
};

export default function StatusDropdown({ status, onChange }: Props) {
  return (
    <select
      value={status}
      onChange={(e) => onChange(e.target.value as UserStatus)}
      className="bg-zinc-800 text-sm px-2 py-1 rounded border border-zinc-700"
    >
      <option value="active">Active</option>
      <option value="pending">Pending</option>
      <option value="suspended">Suspended</option>
    </select>
  );
}
