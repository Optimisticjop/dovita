import Link from "next/link";
import { CheckCircle, MessageCircle, Star } from "lucide-react";

type ProductInfoProps = {
  name: string;
  category: string;
  concern: string;
  price: string;
  description: string;
};

export default function ProductInfo({
  name,
  category,
  concern,
  price,
  description,
}: ProductInfoProps) {
  return (
    <div className="flex flex-col justify-center">
      <span className="inline-flex w-fit rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
        {category}
      </span>

      <h1 className="mt-5 text-4xl lg:text-5xl font-bold text-green-900">
        {name}
      </h1>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-1 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              fill="currentColor"
              className="text-yellow-500"
            />
          ))}
        </div>

        <span className="rounded-full bg-yellow-100 px-4 py-1 text-sm font-medium text-yellow-700">
          Customer Favourite
        </span>
      </div>

      <div className="mt-8 space-y-3">
        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-600" size={20} />
          <span className="text-slate-700">
            Targets <strong>{concern}</strong>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-600" size={20} />
          <span className="text-slate-700">
            Suitable for daily skincare routine
          </span>
        </div>

        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-600" size={20} />
          <span className="text-slate-700">
            Carefully formulated for African skin & hair
          </span>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-4xl font-bold text-yellow-600">{price}</p>
      </div>

      <p className="mt-8 text-lg leading-8 text-slate-600">{description}</p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href={`https://wa.me/233241876182?text=Hello%20Dovita,%20I'm%20interested%20in%20${encodeURIComponent(
            name,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-full
            bg-green-700
            px-8
            py-4
            font-semibold
            text-white
            shadow-lg
            transition-all
            hover:bg-green-800
            hover:-translate-y-1
          "
        >
          <MessageCircle size={20} />
          Order via WhatsApp
        </a>

        <Link
          href="/consultation"
          className="
            inline-flex
            items-center
            justify-center
            rounded-full
            border-2
            border-green-700
            px-8
            py-4
            font-semibold
            text-green-700
            transition-all
            hover:bg-green-700
            hover:text-white
          "
        >
          Book Consultation
        </Link>
      </div>
    </div>
  );
}
