"use client";

import Image from "next/image";
import Link from "next/link";
import { BookmarkMinus, CalendarCheck, Check, Clock, Flame, Star, X } from "lucide-react";
import { PlanItem, usePlan } from "@/context/PlanContext";
import { Workout } from "@/types/workouts";

interface PlanWorkoutCardProps {
  workout: Workout | PlanItem;
  listType: "plan" | "saved";
}

export default function PlanWorkoutCard({
  workout,
  listType,
}: PlanWorkoutCardProps) {
  const { markDone, removeFromPlan, removeFromSaved } = usePlan();
  const isPlanItem = listType === "plan";
  const isDone = isPlanItem && "done" in workout && workout.done;

  const handleRemove = () => {
    if (isPlanItem) {
      removeFromPlan(workout.id);
    } else {
      removeFromSaved(workout.id);
    }
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-base-300 bg-base-200 transition hover:border-brand/40 sm:flex-row">
      <Link
        href={`/workouts/${workout.id}`}
        className="relative h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:min-h-44 sm:w-56"
      >
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(min-width: 640px) 224px, 100vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className={`font-heading text-2xl font-semibold uppercase ${isDone ? "line-through" : ""}`}>
              {workout.name}
            </h2>
            <p className="mt-1 text-sm text-base-content/60">{workout.equipment}</p>
          </div>
          {isDone && (
            <span className="badge badge-success gap-1">
              <Check size={13} /> Completed
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-base-content/75">
          <span className="flex items-center gap-1.5"><Clock size={14} className="text-brand" />{workout.duration} min</span>
          <span className="flex items-center gap-1.5"><Flame size={14} className="text-brand" />{workout.caloriesBurned} kcal</span>
          <span className="flex items-center gap-1.5"><Star size={14} className="text-brand" />{workout.rating}</span>
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <Link href={`/workouts/${workout.id}`} className="btn btn-sm btn-outline rounded-full">
            View Details
          </Link>

          {isPlanItem && !isDone && (
            <button
              type="button"
              onClick={() => markDone(workout.id)}
              className="btn btn-sm rounded-full border-0 bg-brand text-black hover:opacity-90"
            >
              <CalendarCheck size={14} /> Mark as Done
            </button>
          )}

          <button
            type="button"
            onClick={handleRemove}
            className="btn btn-sm btn-ghost rounded-full text-error hover:bg-error/10"
          >
            {isPlanItem ? <X size={14} /> : <BookmarkMinus size={14} />}
            {isPlanItem ? "Remove from plan" : "Remove saved"}
          </button>
        </div>
      </div>
    </article>
  );
}
