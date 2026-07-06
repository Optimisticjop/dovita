import Image from "next/image";

import { getConsultation } from "@/lib/actions/consultations";

import ConsultationStatus from "@/components/admin/consultaions/ConsultationStatus";

export default async function ConsultationDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const consultation = await getConsultation(id);

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="rounded-3xl bg-gradient-to-r from-emerald-700 via-green-700 to-lime-600 p-8 text-white shadow-xl">
        <p className="uppercase tracking-[0.25em] text-emerald-100 text-sm">
          Consultation
        </p>

        <h1 className="mt-2 text-4xl font-bold">{consultation.full_name}</h1>

        <p className="mt-2 text-emerald-100">
          Review customer information, uploaded photos and update consultation
          status.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* LEFT */}

        <div className="space-y-8 lg:col-span-2">
          {/* Customer */}

          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-xl font-bold text-slate-800">
              Customer Information
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Info title="Full Name" value={consultation.full_name} />

              <Info title="Phone Number" value={consultation.phone} />

              <Info title="Email Address" value={consultation.email || "-"} />

              <Info title="Age" value={String(consultation.age)} />

              <Info title="Gender" value={consultation.gender} />

              <Info title="Primary Concern" value={consultation.concern} />
            </div>
          </div>

          {/* Message */}

          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h2 className="mb-5 text-xl font-bold text-slate-800">
              Consultation Notes
            </h2>

            <div className="rounded-2xl bg-slate-50 p-6 leading-8 whitespace-pre-wrap text-slate-700">
              {consultation.message}
            </div>
          </div>

          {/* Images */}

          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-xl font-bold text-slate-800">
              Uploaded Images
            </h2>

            {consultation.consultation_images?.length ? (
              <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
                {consultation.consultation_images.map((image: any) => (
                  <a
                    key={image.id}
                    href={image.image_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-2xl border shadow-sm">
                      <Image
                        src={image.image_url}
                        alt="Consultation Image"
                        fill
                        sizes="300px"
                        className="object-cover transition duration-300 group-hover:scale-110"
                      />
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed p-10 text-center text-slate-500">
                No images uploaded.
              </div>
            )}
          </div>
        </div>

        {/* RIGHT */}

        <div className="space-y-8">
          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-xl font-bold text-slate-800">
              Consultation Status
            </h2>

            <ConsultationStatus
              id={consultation.id}
              currentStatus={consultation.status}
            />
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-lime-50 p-8 border">
            <h3 className="text-lg font-bold text-emerald-800">
              Quick Summary
            </h3>

            <div className="mt-6 space-y-5 text-sm">
              <Summary label="Status" value={consultation.status} />

              <Summary label="Concern" value={consultation.concern} />

              <Summary
                label="Images"
                value={String(consultation.consultation_images?.length || 0)}
              />

              <Summary
                label="Created"
                value={new Date(consultation.created_at).toLocaleString()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <p className="text-sm font-medium text-slate-500">{title}</p>

      <p className="mt-2 text-lg font-semibold text-slate-800">{value}</p>
    </div>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm">
      <span className="text-slate-500">{label}</span>

      <span className="font-semibold text-slate-800">{value}</span>
    </div>
  );
}
