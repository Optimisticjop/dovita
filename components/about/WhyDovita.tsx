import { Leaf, Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";

const items = [
  {
    title: "Premium Ingredients",
    description:
      "Every formula is crafted using carefully selected botanical extracts and premium active ingredients for exceptional skincare and haircare.",
    icon: Leaf,
  },
  {
    title: "African Beauty Expertise",
    description:
      "Specially formulated to address the unique skincare and haircare needs of African men and women.",
    icon: Sparkles,
  },
  {
    title: "FDA Approved",
    description:
      "Our products are FDA approved, giving you confidence in their quality, safety and reliability.",
    icon: ShieldCheck,
  },
  {
    title: "Customer Focused",
    description:
      "From consultation to aftercare, we're committed to helping you achieve healthier skin and stronger hair.",
    icon: HeartHandshake,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-green-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="uppercase tracking-[0.35em] text-yellow-500 font-semibold">
            Why Choose Dovita
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-green-900">
            Trusted By Thousands
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Combining nature, science and personalized care, Dovita Organics
            provides premium skincare and haircare solutions designed to help
            you achieve healthier skin, stronger hair and lasting confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="
                group
                rounded-3xl
                border
                border-green-100
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-yellow-300
                hover:shadow-2xl
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-green-100
                  text-green-700
                  transition-all
                  duration-300
                  group-hover:bg-yellow-400
                  group-hover:text-white
                "
              >
                <Icon size={30} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-green-900">{title}</h3>

              <p className="mt-4 leading-7 text-slate-600">{description}</p>
            </div>
          ))}
        </div>

        {/* FDA Banner */}
        <div
          className="
            mt-20
            overflow-hidden
            rounded-[36px]
            bg-gradient-to-r
            from-green-900
            via-green-800
            to-green-700
            p-10
            shadow-2xl
          "
        >
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
            <div className="max-w-3xl text-center lg:text-left">
              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-yellow-400/20
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-yellow-300
                "
              >
                FDA APPROVED
              </span>

              <h3 className="mt-6 text-4xl font-bold text-white">
                Beauty You Can Trust
              </h3>

              <p className="mt-5 text-lg leading-8 text-green-100">
                Every Dovita Organics product is FDA approved, providing peace
                of mind that our formulations meet recognized safety and quality
                standards. Our commitment is to deliver effective skincare and
                haircare products you can trust every day.
              </p>
            </div>

            <div
              className="
                flex
                h-36
                w-36
                items-center
                justify-center
                rounded-full
                bg-white/10
                backdrop-blur
                ring-4
                ring-yellow-400/30
              "
            >
              <ShieldCheck
                size={72}
                className="text-yellow-400"
                strokeWidth={1.8}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
