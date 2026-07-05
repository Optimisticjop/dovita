import Link from "next/link";

type Consultation = {
  id: string;
  full_name: string;
  concern: string;
  status: string;
  created_at: string;
};

type Props = {
  consultations: Consultation[];
};

export default function ConsultationTable({ consultations }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <table className="min-w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-4 text-left">Customer</th>
            <th className="px-6 py-4 text-left">Concern</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-left">Date</th>
            <th className="px-6 py-4 text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {consultations.length === 0 ? (
            <tr>
              <td colSpan={5} className="py-12 text-center text-slate-500">
                No consultations found.
              </td>
            </tr>
          ) : (
            consultations.map((consultation) => (
              <tr key={consultation.id} className="border-t">
                <td className="px-6 py-4 font-medium">
                  {consultation.full_name}
                </td>

                <td className="px-6 py-4">{consultation.concern}</td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                    {consultation.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  {new Date(consultation.created_at).toLocaleDateString()}
                </td>

                <td className="px-6 py-4 text-right">
                  <Link
                    href={`/admin/consultations/${consultation.id}`}
                    className="font-semibold text-green-700 hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
