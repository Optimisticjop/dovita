import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-yellow-50" />

      <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-green-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-yellow-200/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="uppercase tracking-[0.35em] text-yellow-500 font-semibold">
            Real Transformations
          </span>

          <h1 className="mt-5 text-5xl lg:text-7xl font-extrabold leading-tight text-green-900">
            Confidence You
            <br />
            Can See.
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600 max-w-xl">
            Discover real skincare and haircare journeys from clients who
            trusted Dovita Organics to restore healthy skin, stronger hair and
            renewed confidence.
          </p>

          <div className="flex gap-10 mt-10">
            <div>
              <h3 className="text-3xl font-bold text-green-800">500+</h3>
              <p className="text-slate-500">Transformations</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-800">98%</h3>
              <p className="text-slate-500">Satisfied Clients</p>
            </div>
          </div>
        </div>

        <div className="relative h-[550px]">
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-green-100 to-yellow-100" />

          <Image
            src="/Hair.png"
            alt="Results"
            fill
            className="object-cover rounded-[40px]"
          />

          <div className="absolute bottom-8 left-8 rounded-2xl bg-white/90 backdrop-blur p-5 shadow-xl">
            <p className="text-sm text-slate-500">Real Client Journey</p>

            <h3 className="font-bold text-xl text-green-900">
              8 Weeks Transformation
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
