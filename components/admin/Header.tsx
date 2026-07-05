export default function Header() {
  return (
    <header className="mx-6 mt-5 flex h-20 items-center justify-between rounded-3xl bg-white px-8 shadow-sm">
      <div>
        <h2 className="text-3xl font-bold text-green-900">Dashboard</h2>

        <p className="mt-1 text-slate-500">
          Hey! Welcome 👋
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="font-semibold text-green-900">Administrator</p>

          <p className="text-sm text-slate-500">Secure Session</p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-lg font-bold text-white">
          A
        </div>
      </div>
    </header>
  );
}
