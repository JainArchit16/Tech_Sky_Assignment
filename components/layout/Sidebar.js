import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-black/70 text-white p-5">
      <h1 className="text-xl font-semibold mb-8 tracking-wide">
        Sales Dashboard
      </h1>

      <nav className="flex flex-col space-y-2">
        <Link
          href="/"
          className="rounded-md px-3 py-2 text-sm hover:bg-white/10 transition"
        >
          Dashboard
        </Link>

        <Link
          href="/leads"
          className="rounded-md px-3 py-2 text-sm hover:bg-white/10 transition"
        >
          Leads
        </Link>

        <Link
          href="/calls"
          className="rounded-md px-3 py-2 text-sm hover:bg-white/10 transition"
        >
          Call Logs
        </Link>

        <Link
          href="/settings"
          className="rounded-md px-3 py-2 text-sm hover:bg-white/10 transition"
        >
          Settings
        </Link>
      </nav>
    </aside>
  );
}
