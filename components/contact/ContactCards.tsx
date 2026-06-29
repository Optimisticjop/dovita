import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const cards = [
  {
    icon: Phone,
    title: "Phone",
    value: "+233 24 187 6182",
  },
  {
    icon: Mail,
    title: "Email",
    value: "dovitaorganics@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Instant Chat Support",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Accra, Ghana",
  },
];

export default function ContactCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map(({ icon: Icon, title, value }) => (
          <div
            key={title}
            className="rounded-3xl border border-green-100 bg-gradient-to-br from-white to-green-50 p-8 text-center hover:-translate-y-2 hover:shadow-xl transition"
          >
            <div className="mx-auto h-16 w-16 rounded-2xl bg-green-100 flex items-center justify-center">
              <Icon className="text-green-700" size={28} />
            </div>

            <h3 className="mt-6 text-xl font-bold text-green-900">{title}</h3>

            <p className="mt-3 text-slate-600 leading-7">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
