import { Leaf, Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";

export default function FDAApproved() {
  const standards = [
    {
      title: "Carefully Selected Ingredients",
      icon: Leaf,
      desc: "Premium botanical extracts chosen for safety, effectiveness and skin compatibility.",
    },
    {
      title: "African Skin & Hair Focused",
      icon: Sparkles,
      desc: "Designed specifically to address the unique needs of melanin-rich skin and hair.",
    },
    {
      title: "Quality Controlled Production",
      icon: ShieldCheck,
      desc: "Every product follows strict quality standards from formulation to packaging.",
    },
    {
      title: "Customer-Tested Formulations",
      icon: HeartHandshake,
      desc: "Created with real customer feedback to deliver visible and trusted results.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-medium text-green-800">
            Our Standards
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-green-900">
            Crafted With Quality In Mind
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Every Dovita formula is thoughtfully developed using premium
            ingredients, expert formulation practices and a commitment to
            helping you look and feel your best.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {standards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-green-100
                  bg-gradient-to-br
                  from-white
                  via-white
                  to-green-50
                  p-8
                  shadow-sm
                  hover:-translate-y-2
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-green-100
                    to-yellow-50
                    text-green-700
                    mb-6
                  "
                >
                  <Icon size={28} />
                </div>

                <h3 className="text-lg font-bold text-green-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-16 rounded-3xl border border-green-100 bg-gradient-to-r from-green-50 via-white to-yellow-50 p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-green-900">
                Beauty Backed By Care & Quality
              </h3>

              <p className="mt-2 text-slate-600">
                We are committed to creating products that help you achieve
                healthy skin and stronger hair with confidence.
              </p>
            </div>

            <div className="flex gap-8 text-center">
              <div>
                <h4 className="text-3xl font-bold text-green-800">500+</h4>
                <p className="text-sm text-slate-500">Happy Clients</p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-green-800">98%</h4>
                <p className="text-sm text-slate-500">Satisfaction</p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-green-800">100%</h4>
                <p className="text-sm text-slate-500">Premium Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
