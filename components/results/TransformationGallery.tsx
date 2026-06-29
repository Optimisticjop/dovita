import Image from "next/image";

const results = [
  {
    treatment: "Hyperpigmentation",
    duration: "8 Weeks",
    before: "/before1.jpg",
    after: "/after1.jpg",
  },
  {
    treatment: "Acne Treatment",
    duration: "10 Weeks",
    before: "/before2.jpg",
    after: "/after2.jpg",
  },
  {
    treatment: "Hair Growth",
    duration: "12 Weeks",
    before: "/before3.jpg",
    after: "/after3.jpg",
  },
];

export default function TransformationGallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">
            Before & After
          </span>

          <h2 className="mt-4 text-5xl font-bold text-green-900">
            Real Client Results
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {results.map((item) => (
            <div
              key={item.treatment}
              className="rounded-3xl border border-green-100 overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              <div className="grid grid-cols-2">
                <div className="relative h-72">
                  <Image
                    src={item.before}
                    alt="Before"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative h-72">
                  <Image
                    src={item.after}
                    alt="After"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl text-green-900">
                  {item.treatment}
                </h3>

                <p className="mt-2 text-slate-600">
                  Visible improvement after {item.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
