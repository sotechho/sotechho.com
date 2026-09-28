import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex h-screen flex-col items-center justify-center space-y-8"
    >
      <div className="text-center">
        <h1>404</h1>
        <p>The page you are looking for was not found.</p>
      </div>
      <Link className="underline" href="/">
        Go back
      </Link>
    </main>
  );
}
