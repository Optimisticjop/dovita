"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";


type Props = {
  images: string[];
};

export default function ProductGallery({ images }: Props) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="space-y-6">
      {/* Main Image */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-green-100
          bg-gradient-to-br
          from-green-50
          via-white
          to-yellow-50
          shadow-[0_30px_80px_rgba(0,0,0,0.08)]
          h-[650px]
        "
      >
        {/* Decorative Glow */}
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-yellow-200/40 blur-3xl" />

        {/* Best Seller */}
        <div className="absolute left-8 top-8 z-20 rounded-full bg-yellow-500 px-5 py-2 text-sm font-bold text-white shadow-lg">
          Best Seller
        </div>

        {/* FDA Badge */}
        <div className="absolute right-8 top-8 z-20 flex items-center gap-2 rounded-full bg-white px-5 py-2 shadow-lg">
          <ShieldCheck className="text-green-700" size={18} />
          <span className="text-sm font-semibold text-green-800">
            FDA Approved
          </span>
        </div>

        {/* Product */}
        <Image
          src={selected}
          alt="Product"
          fill
          priority
          className="
            object-contain
            p-14
            transition-all
            duration-500
            hover:scale-110
            hover:-translate-y-2
          "
        />
      </div>

      {/* Thumbnails */}
      <div className="flex flex-wrap gap-5">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelected(image)}
            className={`
              relative
              h-28
              w-28
              overflow-hidden
              rounded-3xl
              border-2
              bg-white
              shadow-md
              transition-all
              duration-300
              ${
                selected === image
                  ? "border-yellow-500 scale-105 shadow-xl"
                  : "border-transparent hover:border-green-300 hover:-translate-y-1"
              }
            `}
          >
            <Image src={image} alt="" fill className="object-contain p-3" />
          </button>
        ))}
      </div>
    </div>
  );
}