
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <section className="grid overflow-hidden rounded-2xl border border-base-300 bg-base-200 md:grid-cols-2">
      {/* Left side: Text and button */}
      <div className="flex flex-col items-start justify-center p-6 sm:p-10 lg:p-14">
        <span className="mb-5 text-xs font-bold tracking-[0.2em] text-brand">
          WORKOUT LIBRARY
        </span>

        <h1 className="font-heading text-4xl leading-[1.05] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          TRAIN WITH INTENT.
          <br />
          LOG EVERY SET.
        </h1>

        <p className="mt-6 max-w-lg text-sm leading-7 text-base-content/60 sm:text-base">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today&apos;s plan, and watch the week&apos;s work add up.
        </p>

        <Link
          href="#library"
          className="mt-8 inline-flex items-center gap-3 rounded-lg bg-brand px-6 py-4 text-xs font-extrabold tracking-wider text-black transition hover:brightness-110"
        >
          BROWSE WORKOUTS
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Right side: Banner image */}
      <div className="relative flex min-h-72 items-center justify-center p-6 sm:min-h-96 lg:min-h-[480px]">
        <Image
          src="/assets/banner.png"
          alt="Athlete training at the gym"
          width={600}
          height={600}
          priority
          className="h-full max-h-[480px] w-full object-contain"
        />
      </div>
    </section>
  );
}
