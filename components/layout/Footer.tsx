import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-green-950 text-white">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* TOP */}
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-white">
                Dovita
              </h2>

              <p className="mt-1 text-xs uppercase tracking-[0.55em] text-yellow-400 font-semibold">
                Organics
              </p>
            </div>

            <p className="mt-6 max-w-sm text-[15px] leading-8 text-green-100/80">
              Premium skincare and haircare solutions designed to help you
              achieve healthier skin, stronger hair and lasting confidence.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="
                        h-10
                        w-10
                        rounded-full
                        bg-white/10
                        flex
                        items-center
                        justify-center
                        duration-300
                        hover:bg-gradient-to-r
                        hover:from-pink-500
                        hover:via-purple-500
                        hover:to-orange-400
                    "
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://wa.me/233241876182"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                font-bold
                text-yellow-400
                mb-6
                "
            >
              Company
            </h3>

            <div className="flex flex-col gap-4 text-[15px] text-green-100/80">
              <Link
                href="/"
                className="
                            transition-all
                            duration-300
                            hover:text-yellow-400
                            hover:translate-x-1
                            "
              >
                Home
              </Link>

              <Link
                href="/results"
                className="
                            transition-all
                            duration-300
                            hover:text-yellow-400
                            hover:translate-x-1
                            "
              >
                Results
              </Link>

              <Link
                href="/consultation"
                className="
                            transition-all
                            duration-300
                            hover:text-yellow-400
                            hover:translate-x-1
                            "
              >
                Consultation
              </Link>

              <Link
                href="/shop"
                className="
                            transition-all
                            duration-300
                            hover:text-yellow-400
                            hover:translate-x-1
                            "
              >
                Shop With us
              </Link>

              <Link
                href="/about"
                className="
                            transition-all
                            duration-300
                            hover:text-yellow-400
                            hover:translate-x-1
                            "
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="
                            transition-all
                            duration-300
                            hover:text-yellow-400
                            hover:translate-x-1
                            "
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                font-bold
                text-yellow-400
                mb-6
                "
            >
              Solutions
            </h3>

            <div className="flex flex-col gap-3 text-green-100">
              <p>Skincare</p>
              <p>Haircare</p>
              <p>Glow Enhancement</p>
              <p>Hair Restoration</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                font-bold
                text-yellow-400
                mb-6
                "
            >
              Get In Touch
            </h3>

            <a
              href="mailto:dovitaorganics@gmail.com"
              className="flex items-center gap-3 hover:text-yellow-400 transition"
            >
              <Mail size={18} />
              <span>dovitaorganics@gmail.com</span>
            </a>

            <a
              href="https://wa.me/233241876182"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-yellow-400 transition"
            >
              <Phone size={18} />
              <span>+233 24 187 6182</span>
            </a>

            <div
              className="
                        flex
                        items-start
                        gap-4
                        text-green-100/80
                        leading-7
                        mb-5
                        "
            >
              <MapPin size={18} />
              <span>Accra, Ghana</span>
            </div>

            <Link
              href="/consultation"
              className="
                inline-block
                mt-6
                rounded-full
                bg-gradient-to-r
                from-yellow-500
                to-yellow-400
                px-6
                py-3
                font-semibold
                text-green-950
                shadow-lg
                hover:text-white/95
              "
            >
              Book Consultation
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-sm tracking-wide text-green-200/70">
            © {new Date().getFullYear()} Dovita Organics. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-green-300">
            <Link href="/privacy" className="hover:text-yellow-400 transition">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-yellow-400 transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
