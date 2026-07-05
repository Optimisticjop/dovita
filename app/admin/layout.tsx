import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F6F8F7]">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
