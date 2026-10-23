"use client";
import { Bookmark, CalendarPlus } from "lucide-react";
import { usePlan } from "@/context/PlanContext";
import { Workout } from "@/types/workouts";

export default function WorkoutActions({ workout }: { workout: Workout }) {
  const { addToPlan, saveForLater } = usePlan();

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        onClick={() => addToPlan(workout)}
        className="flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-xs font-bold text-black transition hover:opacity-90"
      >
        <CalendarPlus size={14} />
        Add to today&apos;s plan
      </button>
      <button
        onClick={() => saveForLater(workout)}
        className="flex items-center gap-2 rounded-lg border border-base-300 px-5 py-2.5 text-xs font-semibold transition hover:border-brand/60"
      >
        <Bookmark size={14} />
        Save for later
      </button>
    </div>
  );
}