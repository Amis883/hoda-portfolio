type Props = {
  role: string;
};

export default function RoleBadge({ role }: Props) {
  const styles: Record<string, string> = {
    admin: "bg-purple-500/20 text-purple-400",
    user: "bg-blue-500/20 text-blue-400",
  };

  return (
    <span
      className={`px-2 py-1 text-xs rounded-md ${
        styles[role] || "bg-zinc-700 text-white"
      }`}
    >
      {role}
    </span>
  );
}
