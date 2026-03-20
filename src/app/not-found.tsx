import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0F4C75] px-4 text-center">
      <div className="mb-8 flex items-center gap-2">
        <span className="text-3xl font-black text-white">TARA</span>
        <span className="text-3xl font-light tracking-[0.15em] text-white/60">
          FLOW
        </span>
      </div>
      <h1 className="mb-4 text-8xl font-black text-white">404</h1>
      <h2 className="mb-4 text-2xl font-bold text-white">
        Izgubio si se u kanjonu!
      </h2>
      <p className="mb-8 max-w-md text-lg text-white/60">
        Stranica koju tražiš ne postoji. Možda je rijeka odnijela link? 🌊
      </p>
      <Link
        href="/"
        className="rounded-full bg-white px-8 py-4 text-lg font-black text-[#0F4C75] transition-colors hover:bg-white/90"
      >
        Nazad na početnu
      </Link>
    </div>
  );
}
