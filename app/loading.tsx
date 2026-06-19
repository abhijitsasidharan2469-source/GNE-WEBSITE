export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 text-white backdrop-blur-sm">
      <div className="flex flex-col items-center gap-6 px-6 py-8 rounded-3xl border border-white/10 bg-slate-900/90 shadow-2xl">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <span className="absolute inset-0 rounded-full border-4 border-emerald-300/30" />
          <span className="absolute inset-4 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin" />
        </div>
        <div className="text-center">
          <p className="text-xl font-black tracking-[0.24em] uppercase text-emerald-300">Loading</p>
          <p className="mt-2 text-sm text-slate-300">Preparing your renewable energy experience...</p>
        </div>
      </div>
    </div>
  );
}
