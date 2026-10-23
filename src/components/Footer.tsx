import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-base-300 bg-base-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="FitLog logo"
            width={20}
            height={20}
          />
          <span className="font-heading text-xs font-semibold tracking-wider">
            FITLOG
          </span>
        </div>

        <p className="text-[9px] text-base-content/50 sm:text-[10px]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}