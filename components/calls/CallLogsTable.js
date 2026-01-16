"use client";
import { useAuth } from "@/context/AuthContext";
import { getCalls } from "@/services/calls.service";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import EmptyState from "@/components/ui/EmptyState";

export default function CallLogsTable() {
  const { user } = useAuth();
  const calls = getCalls(user.tenant);

  return (
    <Card title="Call Logs">
      {!calls.length ? (
        <EmptyState
          title="No calls yet"
          subtitle="Calls will appear once activity starts"
        />
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-400 border-b border-white/10">
              <th className="py-2 text-left">Lead</th>
              <th className="text-left">Time</th>
              <th className="text-left">Duration</th>
              <th className="text-left">Outcome</th>
            </tr>
          </thead>
          <tbody>
            {calls.map((c) => (
              <tr
                key={c.id}
                className="border-b border-white/5 hover:bg-white/5"
              >
                <td className="py-3">{c.leadName}</td>
                <td>{c.time}</td>
                <td>{c.duration}</td>
                <td>
                  <Badge text={c.outcome} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Card>
  );
}
