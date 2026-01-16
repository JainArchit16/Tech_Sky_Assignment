import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AuthProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-6">
              <Topbar />
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
