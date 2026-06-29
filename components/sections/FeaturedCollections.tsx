import { Sparkles, Droplets, Leaf, Waves, ArrowUpRight } from "lucide-react";

const concerns = [
  {
    title: "Hyperpigmentation",
    description: "Fade dark spots and restore an even, radiant complexion.",
    icon: Sparkles,
    color: "from-yellow-100 to-yellow-50",
  },
  {
    title: "Acne & Breakouts",
    description: "Gentle care to calm blemishes and support clearer skin.",
    icon: Droplets,
    color: "from-green-100 to-green-50",
  },
  {
    title: "Dry Skin",
    description: "Deep hydration that leaves your skin soft and nourished.",
    icon: Leaf,
    color: "from-emerald-100 to-green-50",
  },
  {
    title: "Hair Growth",
    description: "Strengthen roots and encourage healthy natural growth.",
    icon: Waves,
    color: "from-yellow-100 to-green-50",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/40 to-white" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            Beauty Solutions
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-green-900">
            Find Your Beauty Solution
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Every skin and hair journey is unique. Explore targeted solutions
            carefully developed to help you achieve healthier, more confident
            beauty.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-16">
          {concerns.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  bg-white
                  border
                  border-green-100
                  p-8
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:shadow-2xl
                "
              >
                {/* Glow */}
                <div
                  className={`
                    absolute
                    -top-16
                    -right-16
                    h-40
                    w-40
                    rounded-full
                    bg-gradient-to-br
                    ${item.color}
                    blur-3xl
                    opacity-60
                  `}
                />

                {/* Icon */}
                <div
                  className={`
                    relative
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    ${item.color}
                    shadow-md
                  `}
                >
                  <Icon className="h-8 w-8 text-green-700" />
                </div>

                {/* Content */}
                <h3 className="relative mt-8 text-2xl font-bold text-green-900">
                  {item.title}
                </h3>

                <p className="relative mt-4 text-slate-600 leading-7">
                  {item.description}
                </p>

                {/* Learn More */}
                <div className="relative mt-8 flex items-center justify-between">
                  <span className="font-semibold text-green-700 group-hover:text-yellow-600 transition">
                    Learn More
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 group-hover:bg-yellow-400 transition">
                    <ArrowUpRight className="h-5 w-5 text-green-800" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
