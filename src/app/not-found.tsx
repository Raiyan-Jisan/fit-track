
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-base-100 px-6 text-center">
      <p className="font-heading text-7xl font-bold text-brand">404</p>

      <h1 className="mt-4 font-heading text-3xl font-bold uppercase">
        Page Not Found
      </h1>

      <p className="mt-3 max-w-md text-base-content/60">
        The page you are looking for does not exist or may have been moved.
      </p>

      <Link
        href="/"
        className="btn btn-primary mt-6"
      >
        Back to Home
      </Link>
    </main>
  );
}
