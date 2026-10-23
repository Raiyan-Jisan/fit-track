"use client";

import { useState } from "react";
import { usePlan } from "@/context/PlanContext";
import { Workout } from "@/types/workouts";
import PlanSummary from "@/components/shared/PlanSummary";
import PlanWorkoutCard from "@/components/shared/PlanWorkoutCard";
import EmptyPlan from "@/components/shared/EmptyPlan";

type ActiveTab = "today" | "saved";
type SortBy = "duration" | "calories" | "rating";

export default function MyPlanPage() {
  const { plan, saved } = usePlan();
  const [activeTab, setActiveTab] = useState<ActiveTab>("today");
  const [sortBy, setSortBy] = useState<SortBy>("rating");

  const sortWorkouts = (workouts: Workout[]) => {
    const sortedWorkouts = [...workouts];

    if (sortBy === "duration") {
      sortedWorkouts.sort((a, b) => a.duration - b.duration);
    } else if (sortBy === "calories") {
      sortedWorkouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else {
      sortedWorkouts.sort((a, b) => b.rating - a.rating);
    }

    return sortedWorkouts;
  };

  const sortedPlan = sortWorkouts(plan);
  const sortedSaved = sortWorkouts(saved);
  const activeWorkouts = activeTab === "today" ? sortedPlan : sortedSaved;

  return (
    <div className="container mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
      <h1 className="mb-2 font-heading text-4xl font-bold uppercase tracking-wide sm:text-5xl">
        My Plan
      </h1>
      <p className="mb-7 text-sm text-base-content/60">
        Organize today&apos;s workouts and keep track of exercises you want to try.
      </p>

      <PlanSummary plan={plan} />

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div role="tablist" className="tabs tabs-boxed w-fit bg-base-200">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "today"}
            onClick={() => setActiveTab("today")}
            className={`tab ${activeTab === "today" ? "tab-active" : ""}`}
          >
            Today&apos;s Plan ({plan.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "saved"}
            onClick={() => setActiveTab("saved")}
            className={`tab ${activeTab === "saved" ? "tab-active" : ""}`}
          >
            Saved ({saved.length})
          </button>
        </div>

        <label className="flex items-center gap-3 text-sm text-base-content/70">
          Sort by
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortBy)}
            className="select select-bordered select-sm bg-base-200"
          >
            <option value="rating">Rating</option>
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
          </select>
        </label>
      </div>

      <div className="mt-6 space-y-5">
        {activeWorkouts.length > 0 ? (
          activeTab === "today" ? (
            sortedPlan.map((item) => (
              <PlanWorkoutCard key={item.id} workout={item} listType="plan" />
            ))
          ) : (
            sortedSaved.map((item) => (
              <PlanWorkoutCard key={item.id} workout={item} listType="saved" />
            ))
          )
        ) : (
          <EmptyPlan listType={activeTab} />
        )}
      </div>
    </div>
  );
}
