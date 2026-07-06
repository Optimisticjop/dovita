import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

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
