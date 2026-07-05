"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  FolderOpen,
  Users,
  ImageIcon,
  MessageSquareQuote,
  Leaf,
  MessageCircleIcon,
} from "lucide-react";
import LogoutButton from "./LogoutButton";

const menu = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: Package,
  },
  {
    name: "Categories",
    href: "/admin/categories",
    icon: FolderOpen,
  },
  {
    name: "Consultations",
    href: "/admin/consultations",
    icon: Users,
  },
  {
    name: "Results",
    href: "/admin/results",
    icon: ImageIcon,
  },
  {
    name: "Testimonials",
    href: "/admin/testimonials",
    icon: MessageSquareQuote,
  },
  {
    name: "Contact Messages",
    href: "/admin/messages",
    icon: MessageCircleIcon,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="m-5 flex h-[calc(100vh-40px)] w-72 flex-col rounded-3xl bg-white shadow-xl">
      {/* Logo */}

      <div className="flex items-center gap-3 px-8 pt-8 pb-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600">
          <Leaf className="text-white" size={24} />
        </div>

        <div>
          <h1 className="text-xl font-bold text-green-900">Dovita Organics</h1>

          <p className="text-sm text-slate-500">Admin Dashboard</p>
        </div>
      </div>

      {/* Menu */}

      <nav className="flex-1 px-4">
        {menu.map(({ name, href, icon: Icon }) => {
          const active = pathname === href;

          return (
            <Link
              key={name}
              href={href}
              className={`mb-2 flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
                active
                  ? "bg-green-600 text-white shadow-lg"
                  : "text-slate-600 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              <Icon size={22} />

              <span className="font-medium">{name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-5">
        <LogoutButton />
      </div>
    </aside>
  );
}
