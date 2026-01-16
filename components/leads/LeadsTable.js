"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getLeads } from "@/services/leads.service";
import { canEditLeads } from "@/utils/permissions";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import EmptyState from "@/components/ui/EmptyState";

export default function LeadsTable() {
  const { user } = useAuth();
  const [filter, setFilter] = useState("All");

  const leads = getLeads(user.tenant).filter((l) =>
    filter === "All" ? true : l.status === filter
  );

  return (
    <Card title="Leads">
      <div className="flex justify-between items-center mb-4">
        <select
          className="bg-gray-900 border border-white/10 px-3 py-2 rounded-md"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>New</option>
          <option>Contacted</option>
        </select>

        {canEditLeads(user.role) && (
          <Button>Add Lead</Button>
        )}
      </div>

      {!leads.length ? (
        <EmptyState
          title="No leads found"
          subtitle="Try switching tenant or filter"
        />
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-400 border-b border-white/10">
              <th className="py-2 text-left">Name</th>
              <th className="py-2 text-left">Phone</th>
              <th className="py-2 text-left">Status</th>
              {canEditLeads(user.role) && <th />}
            </tr>
          </thead>
          <tbody>
            {leads.map((l) => (
              <tr
                key={l.id}
                className="border-b border-white/5 hover:bg-white/5"
              >
                <td className="py-3">{l.name}</td>
                <td>{l.phone}</td>
                <td>
                  <Badge text={l.status} />
                </td>
                {canEditLeads(user.role) && (
                  <td className="text-right">
                    <Button variant="ghost">Edit</Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Card>
  );
}
