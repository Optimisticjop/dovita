export default function Map() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">
            Find Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-green-900">
            Visit Our Location
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-600">
            We're proudly based in Accra, Ghana. Reach out online or visit us by
            appointment.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[32px] shadow-xl border border-green-100">
          <iframe
            title="Dovita Organics Location"
            src="https://maps.google.com/maps?q=Weija%20Tetegu%20Ghana&t=&z=12&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[500px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
