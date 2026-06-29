export default function TermsPage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <span className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">
          Terms & Conditions
        </span>

        <h1 className="mt-4 text-5xl font-bold text-green-900">Terms of Use</h1>

        <div className="mt-12 space-y-10">
          {[
            {
              title: "Consultations",
              body: "Our consultations provide recommendations based on the information you provide. They do not replace professional medical advice.",
            },
            {
              title: "Products",
              body: "Results may vary depending on skin type, consistency of use and individual conditions.",
            },
            {
              title: "Orders",
              body: "Orders are confirmed through WhatsApp communication. Availability and delivery schedules may vary.",
            },
            {
              title: "Returns",
              body: "Opened or used skincare products cannot be returned unless they arrive damaged.",
            },
            {
              title: "Limitation of Liability",
              body: "Dovita Organics is not responsible for allergic reactions resulting from undisclosed medical conditions or misuse of products.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h2 className="text-2xl font-bold text-green-900">
                {item.title}
              </h2>

              <p className="mt-4 leading-8 text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
