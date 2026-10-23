import Image from "next/image";
import { notFound } from "next/navigation";
import WorkoutActions from "@/components/Actions";
import { getSingleItem } from "@/Library/api";
import { Workout } from "@/types/workouts";

export default async function WorkoutDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let workout: Workout;
  try {
    workout = await getSingleItem(id);
  } catch {
    notFound();
  }

  const specs = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: workout.sets },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: workout.rating },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Left: image */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-base-300">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Right: details */}
        <div>
          <h1 className="font-heading text-4xl font-semibold uppercase tracking-wide">
            {workout.name}
          </h1>
          <p className="mt-2 text-sm text-base-content/60">
            {workout.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-brand px-3 py-0.5 text-[11px] font-bold text-black"
              >
                {group}
              </span>
            ))}
          </div>

          <dl className="mt-6 overflow-hidden rounded-xl border border-base-300 bg-base-200">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center justify-between border-b border-base-300 px-4 py-3 text-xs last:border-b-0"
              >
                <dt className="font-semibold uppercase tracking-wider text-base-content/60">
                  {spec.label}
                </dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-8 font-heading text-lg font-semibold uppercase tracking-wide">
            Instructions
          </h2>
          <ol className="mt-3 list-inside list-decimal space-y-2 text-xs text-base-content/80">
            {workout.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          <WorkoutActions workout={workout} />
        </div>
      </div>
    </div>
  );
}