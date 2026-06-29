export default function PrivacyPage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <span className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">
          Privacy Policy
        </span>

        <h1 className="mt-4 text-5xl font-bold text-green-900">
          Your Privacy Matters
        </h1>

        <p className="mt-8 leading-8 text-slate-600">
          At Dovita Organics, we are committed to protecting your personal
          information. Any information collected through consultations, contact
          forms or product enquiries is used solely to provide better services
          and personalized skincare recommendations.
        </p>

        <div className="mt-12 space-y-10">
          {[
            {
              title: "Information We Collect",
              body: "We may collect your name, email address, phone number, consultation details, uploaded photos and any information you voluntarily provide.",
            },
            {
              title: "How We Use Your Information",
              body: "Your information helps us provide personalized recommendations, respond to enquiries and improve our services.",
            },
            {
              title: "Data Protection",
              body: "Your personal information is stored securely and is never sold or shared with third parties without your consent unless required by law.",
            },
            {
              title: "Cookies",
              body: "Our website may use cookies to improve browsing experience and analyze website performance.",
            },
            {
              title: "Your Rights",
              body: "You may request access, correction or deletion of your personal information at any time.",
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-bold text-green-900">
                {section.title}
              </h2>

              <p className="mt-4 leading-8 text-slate-600">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
