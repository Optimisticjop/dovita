"use client";

import { useState } from "react";
import { createContactMessage } from "@/lib/actions/contact";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      await createContactMessage({
        full_name: fullName,
        email,
        phone,
        subject,
        message,
      });

      alert("Message sent successfully!");

      setFullName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-[32px] bg-white p-10 shadow-xl">
      <span className="font-semibold uppercase tracking-[0.3em] text-yellow-500">
        Send Us A Message
      </span>

      <h2 className="mt-4 text-3xl font-bold text-green-900">
        We're Here To Help
      </h2>

      <p className="mt-3 text-slate-600">
        Fill in the form below and our team will get back to you as soon as
        possible.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Full Name
            </label>

            <input
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              className="w-full rounded-xl border border-slate-200 px-5 py-4 transition focus:border-green-700 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Email Address
            </label>

            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className="w-full rounded-xl border border-slate-200 px-5 py-4 transition focus:border-green-700 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Phone Number
            </label>

            <input
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+233..."
              className="w-full rounded-xl border border-slate-200 px-5 py-4 transition focus:border-green-700 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Subject
            </label>

            <input
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="How can we help?"
              className="w-full rounded-xl border border-slate-200 px-5 py-4 transition focus:border-green-700 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Message
          </label>

          <textarea
            required
            rows={7}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us how we can help..."
            className="w-full resize-none rounded-xl border border-slate-200 px-5 py-4 transition focus:border-green-700 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-gradient-to-r from-green-700 via-green-600 to-yellow-500 py-4 font-semibold text-white transition hover:scale-[1.01] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending Message..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
