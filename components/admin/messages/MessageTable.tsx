"use client";

import Link from "next/link";

import DeleteMessageButton from "./DeleteMessageButton";

interface Message {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at: string;
}

export default function MessageTable({ messages }: { messages: Message[] }) {
  if (!messages.length) {
    return (
      <div className="rounded-3xl border bg-white py-24 text-center shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">No Messages Yet</h2>

        <p className="mt-2 text-slate-500">
          Customer messages will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Full Name
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Email
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Phone
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Subject
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Date
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold text-slate-600">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {messages.map((message) => (
              <tr
                key={message.id}
                className="border-b transition hover:bg-slate-50"
              >
                <td className="px-6 py-5 font-semibold">{message.full_name}</td>

                <td className="px-6 py-5 text-slate-600">{message.email}</td>

                <td className="px-6 py-5">{message.phone}</td>

                <td className="px-6 py-5 max-w-xs">
                  <p className="truncate">{message.subject}</p>
                </td>

                <td className="px-6 py-5 whitespace-nowrap text-slate-500">
                  {new Date(message.created_at).toLocaleDateString()}
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-end gap-3">
                    <Link
                      href={`/admin/messages/${message.id}`}
                      className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    >
                      View
                    </Link>

                    <DeleteMessageButton id={message.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
