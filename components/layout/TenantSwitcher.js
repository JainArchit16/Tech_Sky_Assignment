"use client";
import { useAuth } from "@/context/AuthContext";

export default function TenantSwitcher() {
  const { user, setUser } = useAuth();

  return (
    <select
      value={user.tenant}
      onChange={(e) => setUser({ ...user, tenant: e.target.value })}
      className="bg-gray-900 px-2 py-1 rounded"
    >
      <option value="A">Organization A</option>
      <option value="B">Organization B</option>
    </select>
  );
}
