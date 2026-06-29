export default function ContactForm() {
  return (
    <div className="rounded-[32px] bg-white shadow-xl p-10">
      <span className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">
        Send Us A Message
      </span>

      <h2 className="mt-4 text-3xl font-bold text-green-900">
        We're Here To Help
      </h2>

      <form className="mt-10 space-y-6">
        <input
          placeholder="Full Name"
          className="w-full rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-green-700"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-green-700"
        />

        <input
          placeholder="Phone Number"
          className="w-full rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-green-700"
        />

        <input
          placeholder="Subject"
          className="w-full rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-green-700"
        />

        <textarea
          rows={6}
          placeholder="Tell us how we can help..."
          className="w-full rounded-xl border border-slate-200 px-5 py-4 outline-none resize-none focus:border-green-700"
        />

        <button
          className="
            w-full
            rounded-full
            bg-gradient-to-r
            from-green-700
            via-green-600
            to-yellow-500
            py-4
            font-semibold
            text-white
            hover:scale-[1.02]
            transition
          "
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
