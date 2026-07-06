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
  price: number;
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
  price,
  description,
}: ProductInfoProps) {
  return (
    <div className="flex flex-col">
      <span className="inline-flex w-fit rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
        {category}
      </span>

      <div className="mt-5 flex items-center gap-3">
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, index) => (
            <Star key={index} size={17} fill="currentColor" />
          ))}
        </div>

        <span className="text-sm text-slate-500">Premium Product</span>
      </div>

      <h1 className="mt-4 text-4xl lg:text-5xl font-bold text-green-950">
        {name}
      </h1>

      <p className="mt-3 text-lg text-slate-600">
        Premium beauty product carefully formulated to deliver visible results.
      </p>

      <div className="mt-7">
        <p className="text-4xl font-extrabold text-yellow-500">
          GH₵ {price.toFixed(2)}
        </p>
      </div>

      <div className="mt-8 rounded-3xl border border-green-100 bg-green-50 p-6">
        <h3 className="text-lg font-bold text-green-900">Product Highlights</h3>

        <div className="mt-5 grid gap-4">
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle size={18} className="text-green-600" />

              <span>{item}</span>
            </div>
          ))}

          <div className="flex items-center gap-3">
            <CheckCircle size={18} className="text-green-600" />

            <span>Suitable for daily use</span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-green-900">Product Overview</h2>

        <p className="mt-4 leading-8 text-slate-600">{description}</p>
      </div>

      <div className="mt-8 rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
            <ShieldCheck size={24} className="text-green-700" />
          </div>

          <div>
            <h3 className="text-lg font-bold text-green-900">FDA Approved</h3>

            <p className="mt-2 text-slate-600">
              Manufactured to meet recognized FDA quality standards.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href={`https://wa.me/233241876182?text=${encodeURIComponent(
            `Hello Dovita, I'm interested in ${name}.`,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-green-700 to-green-600 px-6 py-3.5 font-semibold text-white"
        >
          <MessageCircle size={20} />
          Order via WhatsApp
        </a>

        <Link
          href="/consultation"
          className="flex-1 inline-flex items-center justify-center rounded-full border-2 border-green-700 px-6 py-3.5 font-semibold text-green-700"
        >
          Book Consultation
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4">
        {trust.map(({ icon: Icon, title }) => (
          <div
            key={title}
            className="rounded-2xl border border-green-100 bg-white p-5 text-center shadow-sm"
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
