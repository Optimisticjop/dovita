import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  Cookie,
  UserCheck,
} from "lucide-react";

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    body: "We may collect your name, phone number, email address, consultation details, uploaded photos, and any other information you voluntarily provide through our website.",
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    body: "Your information helps us provide personalized skincare and haircare recommendations, respond to enquiries, improve our services, and communicate with you regarding consultations and products.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    body: "Your personal information is stored securely and is never sold, rented, or shared with third parties without your consent unless required by law.",
  },
  {
    icon: Cookie,
    title: "Cookies & Analytics",
    body: "We may use cookies to improve your browsing experience, understand website usage, and enhance our online services.",
  },
  {
    icon: UserCheck,
    title: "Your Privacy Rights",
    body: "You may request access, correction, or deletion of your personal information at any time by contacting our support team.",
  },
];

export default function PrivacyPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-white py-24">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-green-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Hero */}
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <ShieldCheck className="text-green-700" size={38} />
          </div>

          <span className="mt-6 inline-block uppercase tracking-[0.35em] text-yellow-500 font-semibold">
            Privacy Policy
          </span>

          <h1 className="mt-5 text-5xl font-bold text-green-900 lg:text-6xl">
            Your Privacy Comes First
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            At Dovita Organics, protecting your personal information is just as
            important as helping you achieve healthier skin and hair. We are
            committed to handling your data responsibly, transparently, and
            securely.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {sections.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="
                rounded-3xl
                border
                border-green-100
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                <Icon className="text-green-700" size={26} />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-green-900">
                {title}
              </h2>

              <p className="mt-4 leading-8 text-slate-600">{body}</p>
            </div>
          ))}
        </div>

        {/* Bottom Notice */}
        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-green-900 via-green-800 to-green-700 p-10 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold">Questions About Your Privacy?</h3>

          <p className="mx-auto mt-5 max-w-2xl text-green-100 leading-8">
            If you have any questions regarding this Privacy Policy or how we
            handle your personal information, please contact our team. We'll be
            happy to assist you.
          </p>

          <a
            href="mailto:dovitaorganics@gmail.com"
            className="
              mt-8
              inline-flex
              items-center
              rounded-full
              bg-yellow-500
              px-8
              py-4
              font-semibold
              text-green-950
              shadow-lg
              transition
              hover:scale-105
              hover:text-white/95
            "
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
