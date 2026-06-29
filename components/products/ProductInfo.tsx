import Link from "next/link";
import {
  CheckCircle,
  MessageCircle,
  ShieldCheck,
  Leaf,
  Sparkles,
  Truck,
  Star,
} from "lucide-react";

type ProductInfoProps = {
  name: string;
  category: string;
  concern: string;
  price: string;
  description: string;
};

const highlights = [
  "FDA Approved",
  "Premium Botanical Ingredients",
  "Suitable for African Skin & Hair",
  "Daily Use Formula",
];

const trust = [
  {
    icon: ShieldCheck,
    title: "Quality Assured",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
  },
  {
    icon: Leaf,
    title: "Natural Ingredients",
  },
  {
    icon: Sparkles,
    title: "Expert Support",
  },
];

export default function ProductInfo({
  name,
  category,
  concern,
  price,
  description,
}: ProductInfoProps) {
  return (
    <div className="flex flex-col">
      {/* Category */}
      <span className="inline-flex w-fit rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
        {category}
      </span>

      {/* Rating */}
      <div className="mt-5 flex items-center gap-3">
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={17}
              fill="currentColor"
              className="text-yellow-500"
            />
          ))}
        </div>

        <span className="text-sm text-slate-500">4.9 • 126 Reviews</span>
      </div>

      {/* Name */}
      <h1 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight text-green-950">
        {name}
      </h1>

      {/* Concern */}
      <p className="mt-3 text-lg text-slate-600">
        Specially formulated to improve{" "}
        <span className="font-semibold text-green-800">{concern}</span>.
      </p>

      {/* Price */}
      <div className="mt-7">
        <p className="text-4xl font-extrabold text-yellow-500">{price}</p>
      </div>

      {/* Highlights */}
      <div className="mt-8 rounded-3xl border border-green-100 bg-green-50 p-6">
        <h3 className="text-lg font-bold text-green-900">Product Highlights</h3>

        <div className="mt-5 grid gap-4">
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle size={18} className="text-green-600" />
              <span className="text-slate-700">{item}</span>
            </div>
          ))}

          <div className="flex items-center gap-3">
            <CheckCircle size={18} className="text-green-600" />
            <span className="text-slate-700">
              Targets <strong>{concern}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-green-900">Product Overview</h2>

        <p className="mt-4 leading-8 text-slate-600">{description}</p>
      </div>

      {/* FDA */}
      <div className="mt-8 rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100">
            <ShieldCheck size={24} className="text-green-700" />
          </div>

          <div>
            <h3 className="text-lg font-bold text-green-900">FDA Approved</h3>

            <p className="mt-2 text-slate-600 leading-7">
              Manufactured to meet recognized FDA quality and safety standards,
              giving you confidence with every purchase.
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href={`https://wa.me/233241876182?text=Hello Dovita, I'm interested in ${encodeURIComponent(
            name,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-green-700 to-green-600 px-6 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
        >
          <MessageCircle size={20} />
          Order via WhatsApp
        </a>

        <Link
          href="/consultation"
          className="flex-1 inline-flex items-center justify-center rounded-full border-2 border-green-700 bg-white px-6 py-3.5 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
        >
          Book Consultation
        </Link>
      </div>

      {/* Trust */}
      <div className="mt-10 grid grid-cols-2 gap-4">
        {trust.map(({ icon: Icon, title }) => (
          <div
            key={title}
            className="rounded-2xl border border-green-100 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-green-100">
              <Icon size={20} className="text-green-700" />
            </div>

            <p className="mt-3 text-sm font-semibold text-green-900">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
