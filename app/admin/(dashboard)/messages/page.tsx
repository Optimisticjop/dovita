import { Mail } from "lucide-react";

import { getContactMessages } from "@/lib/actions/contact";

import MessageTable from "@/components/admin/messages/MessageTable";

export default async function MessagesPage() {
  const messages = await getContactMessages();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-700">
            Contact Messages
          </span>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">Messages</h1>

          <p className="mt-1 text-slate-500">
            View enquiries submitted from the website contact page.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-100 bg-cyan-50 px-6 py-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Mail className="text-cyan-700" size={18} />

            <span className="text-sm text-slate-500">Total Messages</span>
          </div>

          <h2 className="mt-1 text-3xl font-bold text-cyan-700">
            {messages.length}
          </h2>
        </div>
      </div>

      <MessageTable messages={messages} />
    </div>
  );
}
