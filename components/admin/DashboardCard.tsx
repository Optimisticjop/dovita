import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  href: string;
};

export default function DashboardAction({ title, href }: Props) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <span className="font-semibold text-green-900">{title}</span>

      <ArrowRight size={20} className="text-green-700" />
    </Link>
  );
}
