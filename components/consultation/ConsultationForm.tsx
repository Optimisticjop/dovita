import Image from "next/image";

export default function ConsultationForm() {
  return (
    <section id="consultation-form" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* FORM */}

        <div className="bg-white rounded-3xl border border-green-100 shadow-lg p-10">
          <h2 className="text-4xl font-bold text-green-900">
            Consultation Form
          </h2>

          <p className="mt-3 text-slate-600">
            Complete the form below and our skincare specialists will contact
            you shortly.
          </p>

          <form className="mt-10 space-y-6">
            <input
              placeholder="Full Name"
              className="w-full rounded-xl border p-4"
            />

            <input
              placeholder="Phone Number"
              className="w-full rounded-xl border p-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border p-4"
            />

            <div className="grid md:grid-cols-2 gap-5">
              <input placeholder="Age" className="rounded-xl border p-4" />

              <select className="rounded-xl border p-4">
                <option>Gender</option>
                <option>Female</option>
                <option>Male</option>
              </select>
            </div>

            <select className="w-full rounded-xl border p-4">
              <option>Primary Concern</option>
              <option>Acne</option>
              <option>Hyperpigmentation</option>
              <option>Dry Skin</option>
              <option>Hair Growth</option>
              <option>Hair Loss</option>
            </select>

            <input
              placeholder="How long have you experienced this?"
              className="w-full rounded-xl border p-4"
            />

            <input
              placeholder="Current products used"
              className="w-full rounded-xl border p-4"
            />

            <input
              placeholder="Medical allergies"
              className="w-full rounded-xl border p-4"
            />

            <textarea
              rows={5}
              placeholder="Describe your concern"
              className="w-full rounded-xl border p-4"
            />

            <input
              type="file"
              multiple
              className="w-full rounded-xl border p-4"
            />

            <select className="w-full rounded-xl border p-4">
              <option>Preferred Contact Method</option>
              <option>Phone Call</option>
              <option>WhatsApp</option>
              <option>Email</option>
            </select>

            <label className="flex items-start gap-3 text-sm">
              <input type="checkbox" className="mt-1" />

              <span>
                I consent to Dovita Organics storing my information and
                contacting me regarding my consultation.
              </span>
            </label>

            <button
              className="
                w-full
                rounded-full
                bg-gradient-to-r
                from-green-700
                to-yellow-500
                py-4
                text-white
                font-semibold
              "
            >
              Submit Consultation
            </button>
          </form>
        </div>

        {/* RIGHT */}

        <div>
          <div className="relative h-[420px] rounded-[35px] overflow-hidden shadow-xl">
            <Image
              src="/Consultation.webp"
              alt="Consultation"
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-10 rounded-3xl bg-green-50 border border-green-100 p-8">
            <h3 className="text-2xl font-bold text-green-900">
              What Happens Next?
            </h3>

            <div className="space-y-6 mt-8">
              <div>
                <h4 className="font-semibold">✔ We review your submission</h4>
                <p className="text-slate-600">
                  Our team carefully evaluates your concerns.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">✔ Personalized advice</h4>
                <p className="text-slate-600">
                  We recommend products tailored to your needs.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">✔ Follow-up support</h4>
                <p className="text-slate-600">
                  We're available to guide your skincare journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
