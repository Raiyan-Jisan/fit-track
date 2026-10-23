"use client";

import { PlanItem } from "@/context/PlanContext";

interface PlanSummaryProps {
  plan: PlanItem[];
}

export default function PlanSummary({ plan }: PlanSummaryProps) {
  const totalMinutes = plan.reduce((total, workout) => total + workout.duration, 0);
  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );
  const completedWorkouts = plan.filter((workout) => workout.done).length;

  return (
    <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-base-300 bg-base-200 sm:grid-cols-3">
      <div className="p-5 sm:p-6">
        <p className="text-sm text-base-content/60">Exercises</p>
        <p className="mt-1 font-heading text-4xl font-bold text-brand">
          {plan.length}
        </p>
        <p className="mt-1 text-xs text-base-content/50">
          {completedWorkouts} completed
        </p>
      </div>

      <div className="border-t border-base-300 p-5 sm:border-l sm:border-t-0 sm:p-6">
        <p className="text-sm text-base-content/60">Minutes</p>
        <p className="mt-1 font-heading text-4xl font-bold">{totalMinutes}</p>
        <p className="mt-1 text-xs text-base-content/50">Planned workout time</p>
      </div>

      <div className="border-t border-base-300 p-5 sm:border-l sm:border-t-0 sm:p-6">
        <p className="text-sm text-base-content/60">Calories</p>
        <p className="mt-1 font-heading text-4xl font-bold">{totalCalories}</p>
        <p className="mt-1 text-xs text-base-content/50">Estimated total kcal</p>
      </div>
    </div>
  );
}
