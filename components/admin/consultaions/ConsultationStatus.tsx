"use client";

import { useState, useTransition } from "react";
import { updateConsultationStatus } from "@/lib/actions/consultations";

type Props = {
  id: string;
  currentStatus: string;
};

export default function ConsultationStatus({ id, currentStatus }: Props) {
  const [status, setStatus] = useState(currentStatus);

  const [pending, startTransition] = useTransition();

  function handleSave() {
    startTransition(async () => {
      await updateConsultationStatus(id, status);

      alert("Status updated.");
    });
  }

  return (
    <div className="rounded-xl border bg-white p-6 space-y-4">
      <h2 className="text-xl font-semibold">Consultation Status</h2>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full rounded-lg border p-3"
      >
        <option value="Pending">Pending</option>

        <option value="In Progress">In Progress</option>

        <option value="Completed">Completed</option>
      </select>

      <button
        onClick={handleSave}
        disabled={pending}
        className="rounded-lg bg-green-700 px-5 py-3 text-white"
      >
        {pending ? "Saving..." : "Save Status"}
      </button>
    </div>
  );
}
