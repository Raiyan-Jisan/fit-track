
"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-heading text-3xl font-bold uppercase">
        Something Went Wrong
      </h1>
      <p className="text-base-content/60">
        We could not load this page. Please try again.
      </p>
      <button className="btn btn-primary" onClick={() => reset()}>
        Try Again
      </button>
    </main>
  );
}
