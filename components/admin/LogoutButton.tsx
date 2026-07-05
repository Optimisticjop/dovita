"use client";

import { createClient } from "@/lib/supabase/client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function logout() {
    const supabase = createClient();

    await supabase.auth.signOut();

    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <button
      onClick={logout}
      className="flex w-full items-center justify-center gap-3 rounded-2xl bg-red-50 py-4 font-semibold text-red-600 transition hover:bg-red-500 hover:text-white"
    >
      <LogOut size={20} />
      Logout
    </button>
  );
}
