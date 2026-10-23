import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-base-300 bg-base-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-7 text-center sm:flex-row sm:px-6 sm:py-8 sm:text-left">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="FitLog logo" width={28} height={28} />
          <span className="font-heading text-base font-semibold tracking-wider">
            FITLOG
          </span>
        </div>

        <p className="text-xs text-base-content/50 sm:text-sm">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
