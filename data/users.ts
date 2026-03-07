export type UserStatus = "active" | "pending" | "suspended";
export type User = {
  id: number;
  name: string;
  email: string;
  status: UserStatus;
  role: string;
};

export const users: User[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "active",
    role: "admin",
  },
  {
    id: 2,
    name: "Mark Chen",
    email: "mark@example.com",
    status: "pending",
    role: "user",
  },
  {
    id: 3,
    name: "Sara Miller",
    email: "sara@example.com",
    status: "active",
    role: "user",
  },
  {
    id: 4,
    name: "David Kim",
    email: "david@example.com",
    status: "suspended",
    role: "user",
  },
  {
    id: 5,
    name: "David Kim",
    email: "david@example.com",
    status: "suspended",
    role: "user",
  },
  {
    id: 6,
    name: "David Kim",
    email: "david@example.com",
    status: "suspended",
    role: "user",
  },
  {
    id: 7,
    name: "David Kim",
    email: "david@example.com",
    status: "suspended",
    role: "user",
  },
  {
    id: 8,
    name: "David Kim",
    email: "david@example.com",
    status: "suspended",
    role: "user",
  },
  {
    id: 9,
    name: "David Kim",
    email: "david@example.com",
    status: "suspended",
    role: "user",
  },
];
