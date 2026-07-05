"use client";

import { useState } from "react";
import Image from "next/image";

import { uploadConsultationImage } from "@/lib/actions/upload";
import { createConsultation } from "@/lib/actions/consultations";

export default function ConsultationForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [concern, setConcern] = useState("");

  const [message, setMessage] = useState("");

  const [images, setImages] = useState<File[]>([]);

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setLoading(true);

      const uploadedImages: string[] = [];

      for (const file of images) {
        const url = await uploadConsultationImage(file);
        uploadedImages.push(url);
      }

      await createConsultation({
        full_name: fullName,
        phone,
        email,
        age: Number(age),
        gender,
        concern,
        message,
        images: uploadedImages,
      });

      alert("Consultation submitted successfully!");

      setFullName("");
      setPhone("");
      setEmail("");
      setAge("");
      setGender("");
      setConcern("");
      setMessage("");
      setImages([]);
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="consultation-form" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid gap-16 lg:grid-cols-2">
        {/* FORM */}

        <div className="rounded-3xl border border-green-100 bg-white p-10 shadow-lg">
          <h2 className="text-4xl font-bold text-green-900">
            Consultation Form
          </h2>

          <p className="mt-3 text-slate-600">
            Complete the form below and our skincare specialists will contact
            you shortly.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              className="w-full rounded-xl border p-4"
              required
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              className="w-full rounded-xl border p-4"
              required
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full rounded-xl border p-4"
            />

            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Age"
                className="rounded-xl border p-4"
                required
              />

              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="rounded-xl border p-4"
                required
              >
                <option value="">Gender</option>
                <option>Female</option>
                <option>Male</option>
              </select>
            </div>

            <select
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
              className="w-full rounded-xl border p-4"
              required
            >
              <option value="">Primary Concern</option>
              <option>Acne</option>
              <option>Hyperpigmentation</option>
              <option>Dry Skin</option>
              <option>Hair Growth</option>
              <option>Hair Loss</option>
            </select>

            {/* UI Only */}

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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your concern"
              className="w-full rounded-xl border p-4"
              required
            />

            <input
              type="file"
              multiple
              accept="image/*"
              className="w-full rounded-xl border p-4"
              onChange={(e) => {
                if (e.target.files) {
                  setImages(Array.from(e.target.files));
                }
              }}
            />

            {/* UI Only */}

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
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-gradient-to-r from-green-700 to-yellow-500 py-4 font-semibold text-white"
            >
              {loading ? "Submitting..." : "Submit Consultation"}
            </button>
          </form>
        </div>

        {/* RIGHT */}

        <div>
          <div className="relative h-[420px] overflow-hidden rounded-[35px] shadow-xl">
            <Image
              src="/Consultation.webp"
              alt="Consultation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="mt-10 rounded-3xl border border-green-100 bg-green-50 p-8">
            <h3 className="text-2xl font-bold text-green-900">
              What Happens Next?
            </h3>

            <div className="mt-8 space-y-6">
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
