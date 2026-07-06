import { getConsultations } from "@/lib/actions/consultations";
import ConsultationTable from "@/components/admin/consultaions/ConsultationTable";

export default async function ConsultationsPage() {
  const consultations = await getConsultations();

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col gap-5 rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
            Consultation Center
          </span>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Consultations
          </h1>

          <p className="mt-1 text-slate-500">
            Review customer consultation requests and uploaded images.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-8 py-5 text-center">
          <p className="text-sm font-medium text-slate-500">Total Requests</p>

          <h2 className="mt-1 text-4xl font-bold text-emerald-700">
            {consultations.length}
          </h2>
        </div>
      </div>

      <ConsultationTable consultations={consultations} />
    </div>
  );
}
