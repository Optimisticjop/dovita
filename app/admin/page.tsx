import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

import {
  Package,
  FolderOpen,
  Users,
  ImageIcon,
  MessageSquareQuote,
} from "lucide-react";

import StatCard from "@/components/admin/StatCard";
import DashboardAction from "@/components/admin/DashboardCard";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const [products, categories, consultations, results, testimonials] =
    await Promise.all([
      supabase.from("products").select("*", { count: "exact", head: true }),
      supabase.from("categories").select("*", { count: "exact", head: true }),
      supabase.from("consultations").select("*", {
        count: "exact",
        head: true,
      }),
      supabase.from("results").select("*", { count: "exact", head: true }),
      supabase.from("testimonials").select("*", {
        count: "exact",
        head: true,
      }),
    ]);

  return (
    <div className="space-y-8">
      {/* Welcome */}

      <div className="rounded-3xl bg-gradient-to-r from-green-700 to-green-500 p-8 text-white shadow-lg">

        <p className="mt-2 text-green-100">Logged in as {user.email}</p>
      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        <StatCard
          title="Products"
          value={products.count ?? 0}
          icon={Package}
          color="bg-green-600"
        />

        <StatCard
          title="Categories"
          value={categories.count ?? 0}
          icon={FolderOpen}
          color="bg-yellow-500"
        />

        <StatCard
          title="Consultations"
          value={consultations.count ?? 0}
          icon={Users}
          color="bg-blue-500"
        />

        <StatCard
          title="Results"
          value={results.count ?? 0}
          icon={ImageIcon}
          color="bg-purple-500"
        />

        <StatCard
          title="Testimonials"
          value={testimonials.count ?? 0}
          icon={MessageSquareQuote}
          color="bg-pink-500"
        />
      </div>

      {/* Quick Actions */}

      <div>
        <h2 className="mb-5 text-2xl font-bold text-green-900">
          Quick Actions
        </h2>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <DashboardAction title="Manage Products" href="/admin/products" />

          <DashboardAction title="Manage Categories" href="/admin/categories" />

          <DashboardAction title="Consultations" href="/admin/consultations" />

          <DashboardAction
            title="Manage Testimonials"
            href="/admin/testimonials"
          />
        </div>
      </div>
    </div>
  );
}
