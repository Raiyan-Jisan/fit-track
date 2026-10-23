import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";
import { Workout } from "@/types/workouts";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group overflow-hidden rounded-2xl border border-base-300 bg-base-200 transition hover:-translate-y-1 hover:border-brand/50"
    >
      <div className="relative h-36 w-full overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-brand px-2.5 py-0.5 text-[10px] font-bold uppercase text-black"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="font-heading text-lg font-semibold uppercase tracking-wide">
          {workout.name}
        </h3>
        <p className="mt-0.5 text-xs text-muted">{workout.equipment}</p>

        <div className="mt-4 flex items-center gap-4 border-t border-base-300 pt-3 text-[11px] text-base-content/80">
          <span className="flex items-center gap-1">
            <Clock size={12} /> {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame size={12} /> {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star size={12} /> {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}