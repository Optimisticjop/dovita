import {
  FileText,
  Stethoscope,
  ShoppingBag,
  PackageCheck,
  RotateCcw,
  ShieldAlert,
} from "lucide-react";

const sections = [
  {
    icon: Stethoscope,
    title: "Consultations",
    body: "Our consultations are designed to provide personalized skincare and haircare recommendations based on the information you provide. They are for informational purposes only and should not replace professional medical advice or diagnosis.",
  },
  {
    icon: ShoppingBag,
    title: "Products & Results",
    body: "Our products are formulated using carefully selected ingredients; however, individual results may vary depending on skin type, hair type, lifestyle, consistency of use, and other personal factors.",
  },
  {
    icon: PackageCheck,
    title: "Orders & Delivery",
    body: "Orders are confirmed through our official WhatsApp channel. Product availability, delivery timelines, and shipping fees may vary depending on your location and stock availability.",
  },
  {
    icon: RotateCcw,
    title: "Returns & Exchanges",
    body: "Due to the nature of skincare and personal care products, opened or used products cannot be returned. Damaged or incorrect items should be reported within 48 hours of delivery for assistance.",
  },
  {
    icon: ShieldAlert,
    title: "Limitation of Liability",
    body: "Dovita Organics shall not be held responsible for allergic reactions, misuse of products, or adverse effects arising from undisclosed medical conditions or failure to follow product instructions.",
  },
];

export default function TermsPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-white py-24">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-green-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Hero */}
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <FileText className="text-green-700" size={38} />
          </div>

          <span className="mt-6 inline-block uppercase tracking-[0.35em] text-yellow-500 font-semibold">
            Terms & Conditions
          </span>

          <h1 className="mt-5 text-5xl font-bold text-green-900 lg:text-6xl">
            Terms of Use
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            These Terms & Conditions govern your use of the Dovita Organics
            website, consultations, products, and services. By accessing our
            website or placing an order, you agree to the terms outlined below.
          </p>
        </div>

        {/* Terms Cards */}
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
                <Icon size={26} className="text-green-700" />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-green-900">
                {title}
              </h2>

              <p className="mt-4 leading-8 text-slate-600">{body}</p>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-green-900 via-green-800 to-green-700 p-10 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold">Need More Information?</h3>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-green-100">
            If you have any questions regarding these Terms & Conditions,
            consultations, product usage, or your order, our team is always
            happy to assist you.
          </p>

          <a
            href="https://wa.me/233241876182"
            target="_blank"
            rel="noopener noreferrer"
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
              transition-all
              duration-300
              hover:scale-105
              hover:text-white/95
            "
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
