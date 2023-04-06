import { MoviesOverview } from '../modules/movies-overview/movies-overview';

export function Component() {
  return (
    <main className="w-full p-2 lg:p-8">
      <div className="text-center mb-2 lg:mb-8">
        <h1 className="font-semibold text-xl lg:text-3xl">React SPA</h1>
        <p className="text-sm">
          Bootstrapped with Vite. Powered by the Movie DB API.
        </p>
      </div>
      <MoviesOverview />
    </main>
  );
}

export { ErrorBoundary } from '../modules/movies-overview/movies-overview';
