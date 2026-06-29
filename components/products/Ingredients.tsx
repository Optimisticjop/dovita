const ingredients = [
  "Niacinamide",
  "Vitamin C",
  "Licorice Extract",
  "Hyaluronic Acid",
  "Aloe Vera",
  "Green Tea",
  "Shea Butter",
  "Jojoba Oil",
];

export default function Ingredients() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <span className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">
            Ingredients
          </span>

          <h2 className="mt-4 text-4xl font-bold text-green-900">
            Carefully Selected Ingredients
          </h2>

          <p className="mt-5 text-slate-600">
            Every ingredient is chosen to nourish, protect and support healthy
            skin and hair.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {ingredients.map((item) => (
            <span
              key={item}
              className="
                rounded-full
                bg-gradient-to-r
                from-green-100
                to-yellow-100
                px-6
                py-3
                font-medium
                text-green-800
                border
                border-green-200
              "
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}