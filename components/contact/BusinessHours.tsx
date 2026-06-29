import { Clock, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function BusinessHours() {
  return (
    <div className="space-y-8">
      <div className="rounded-[32px] bg-white shadow-xl p-10">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-green-100 flex items-center justify-center">
            <Clock className="text-green-700" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-green-900">
              Business Hours
            </h2>

            <p className="text-slate-500">
              We're available during these hours.
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-5 text-slate-700">
          <div className="flex justify-between">
            <span>Monday - Saturday</span>
            <span>9:00 AM - 5:00 PM</span>
          </div>

          {/* <div className="flex justify-between">
            <span>Saturday</span>
            <span>9:00 AM - 5:00 PM</span>
          </div> */}

          <div className="flex justify-between">
            <span>Sunday</span>
            <span>Closed</span>
          </div>
        </div>
      </div>

      <div className="rounded-[32px] bg-gradient-to-br from-green-800 to-green-700 p-10 text-white">
        <MessageCircle size={40} className="text-yellow-400" />

        <h3 className="mt-6 text-3xl font-bold">Need Faster Assistance?</h3>

        <p className="mt-4 leading-8 text-green-100">
          Chat with us directly on WhatsApp and receive personalized assistance.
          We usually reply within 30 minutes during business hours.
        </p>

        <Link
          href="https://wa.me/233241876182"
          target="_blank"
          className="inline-block mt-8 rounded-full bg-yellow-500 px-7 py-3 font-semibold text-green-950 hover:scale-105 transition"
        >
          Chat on WhatsApp
        </Link>
      </div>
    </div>
  );
}
