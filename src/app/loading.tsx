export default function Loading() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-base-100">
      <span className="loading loading-spinner loading-lg text-brand" />
      <p className="text-sm text-base-content/60">
        Loading workouts...
      </p>
    </main>
  );
}