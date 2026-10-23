"use client";

import Link from "next/link";
import { Bookmark, CalendarDays } from "lucide-react";

interface EmptyPlanProps {
  listType: "today" | "saved";
}

export default function EmptyPlan({ listType }: EmptyPlanProps) {
  const isToday = listType === "today";

  return (
    <div className="flex min-h-72 flex-col items-center justify-center rounded-2xl border border-dashed border-base-300 bg-base-100 px-6 py-12 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-base-200 text-brand">
        {isToday ? <CalendarDays size={25} /> : <Bookmark size={25} />}
      </div>

      <h2 className="font-heading text-2xl font-bold uppercase">
        {isToday ? "Nothing here yet" : "No saved workouts"}
      </h2>
      <p className="mt-2 max-w-md text-sm text-base-content/60">
        {isToday
          ? "Browse the workout library and add a workout to start today's plan."
          : "Save workouts you want to try later. They will appear here."}
      </p>

      <Link
        href="/"
        className="btn mt-6 rounded-full border-0 bg-brand px-5 text-black hover:opacity-90"
      >
        Browse workouts
      </Link>
    </div>
  );
}
