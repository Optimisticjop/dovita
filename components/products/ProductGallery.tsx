"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
};

export default function ProductGallery({ images }: Props) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div>
      <div className="relative h-[520px] overflow-hidden rounded-[32px] bg-gradient-to-br from-green-50 via-white to-yellow-50 shadow-lg">
        <Image
          src={selected}
          alt="Product"
          fill
          className="object-contain p-10"
          priority
        />
      </div>

      <div className="mt-6 flex gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelected(image)}
            className={`relative h-24 w-24 overflow-hidden rounded-2xl border-2 transition ${
              selected === image
                ? "border-yellow-500"
                : "border-transparent hover:border-green-300"
            }`}
          >
            <Image
              src={image}
              alt=""
              fill
              className="object-contain p-2 bg-white"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
