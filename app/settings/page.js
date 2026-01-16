"use client"

import { useAuth } from "@/context/AuthContext";

export default function Settings() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="p-6 max-w-3xl">
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>

      {user?.role === "Admin" ? (
        <AdminSettings />
      ) : (
        <NoAccess />
      )}
    </div>
  );
}

function AdminSettings() {
  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-white/10 bg-white/5 p-4">
        <h2 className="text-lg font-medium mb-2">User Management</h2>
        <p className="text-sm text-white/70">
          Manage agents, assign roles, and control access levels.
        </p>
      </section>

      <section className="rounded-lg border border-white/10 bg-white/5 p-4">
        <h2 className="text-lg font-medium mb-2">System Preferences</h2>
        <p className="text-sm text-white/70">
          Configure global dashboard behavior and defaults.
        </p>
      </section>

      <section className="rounded-lg border border-white/10 bg-white/5 p-4">
        <h2 className="text-lg font-medium mb-2">Audit Logs</h2>
        <p className="text-sm text-white/70">
          View admin activity and system-level changes.
        </p>
      </section>
    </div>
  );
}

function NoAccess() {
  return (
    <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
      <h2 className="text-lg font-medium text-red-400 mb-1">
        Access Restricted
      </h2>
      <p className="text-sm text-red-300/80">
        You do not have permission to view this section.
      </p>
    </div>
  );
}
