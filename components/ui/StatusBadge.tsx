type Status = "active" | "suspended" | "pending";

export default function StatusBadge({ status }: { status: Status }) {
  const colors = {
    active: "#22c55e",
    suspended: "#ef4444",
    pending: "#facc15",
  };

  const style = {
    padding: "4px 10px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: 600,
    color: "white",
    backgroundColor: colors[status],
  };

  return <span style={style}>{status}</span>;
}
