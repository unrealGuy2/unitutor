import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout">
      {/* The Sidebar is always visible */}
      <Sidebar />
      
      {/* The "children" is the page content (e.g. Overview, Classroom) */}
      <main className="dashboard-main">
        {children}
      </main>
    </div>
  );
}