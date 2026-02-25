import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-muted-foreground mb-8">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="text-blue-600 hover:underline"
      >
        Return to home
      </Link>
    </div>
  );
}
