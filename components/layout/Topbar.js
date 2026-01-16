"use client";
import { useAuth } from "@/context/AuthContext";
import TenantSwitcher from "./TenantSwitcher";

export default function Topbar() {
  const { user, setUser } = useAuth();

  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <div className="text-sm text-gray-400">Role: {user.role}</div>
        <div className="font-semibold">{user.name}</div>
      </div>

      <div className="flex gap-3 items-center">
        <TenantSwitcher />
        <select
          value={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}
          className="bg-gray-900 px-2 py-1 rounded"
        >
          <option value="Admin">Admin</option>
          <option value="Agent">Agent</option>
        </select>
      </div>
    </div>
  );
}
