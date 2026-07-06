import Link from "next/link";
import {
  Mail,
  Phone,
  User,
  Calendar,
  MessageSquare,
  ArrowLeft,
} from "lucide-react";

import { getMessage } from "@/lib/actions/contact";

export default async function MessageDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const message = await getMessage(id);

  return (
    <div className="space-y-8">
      <Link
        href="/admin/messages"
        className="inline-flex items-center gap-2 text-sm font-medium text-green-700 hover:text-green-800"
      >
        <ArrowLeft size={18} />
        Back to Messages
      </Link>

      <div className="rounded-3xl border bg-white shadow-sm overflow-hidden">
        <div className="border-b bg-gradient-to-r from-green-700 to-green-600 px-8 py-6 text-white">
          <h1 className="text-3xl font-bold">Customer Message</h1>

          <p className="mt-2 text-green-100">
            Submitted on {new Date(message.created_at).toLocaleString()}
          </p>
        </div>

        <div className="grid gap-8 p-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <User className="text-green-700" />

                <div>
                  <p className="text-sm text-slate-500">Full Name</p>

                  <p className="font-semibold text-lg">{message.full_name}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <Mail className="text-green-700" />

                <div>
                  <p className="text-sm text-slate-500">Email</p>

                  <p className="font-medium">{message.email}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <Phone className="text-green-700" />

                <div>
                  <p className="text-sm text-slate-500">Phone</p>

                  <p>{message.phone}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <Calendar className="text-green-700" />

                <div>
                  <p className="text-sm text-slate-500">Date</p>

                  <p>{new Date(message.created_at).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border bg-slate-50 p-6">
              <h3 className="mb-3 flex items-center gap-2 font-semibold text-green-900">
                <MessageSquare size={18} />
                Subject
              </h3>

              <p className="text-lg font-medium">{message.subject}</p>
            </div>

            <div className="rounded-2xl border bg-slate-50 p-6">
              <h3 className="mb-4 font-semibold text-green-900">Message</h3>

              <div className="whitespace-pre-wrap leading-8 text-slate-700">
                {message.message}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
