import { useQuery } from "@tanstack/react-query";
import type { Movie } from "../movies-api/movies-api.server";
import { fetchMovies } from "../movies-api/movies-api.server";
import { MoviesGrid } from "./movies-grid";

export function MoviesOverview() {
  const popularMoviesQuery = useQuery<Movie[]>({
    initialData: [] as Movie[],
    useErrorBoundary: true,
    queryKey: ["popularMovies"],
    queryFn: () => fetchMovies("popular"),
  });
  const topRatedMoviesQuery = useQuery<Movie[]>({
    initialData: [] as Movie[],
    useErrorBoundary: true,
    queryKey: ["topRatedMovies"],
    queryFn: () => fetchMovies("top_rated"),
  });
  const nowPlayingMoviesQuery = useQuery<Movie[]>({
    initialData: [] as Movie[],
    useErrorBoundary: true,
    queryKey: ["nowPlayingMovies"],
    queryFn: () => fetchMovies("now_playing"),
  });
  const upcomingMoviesQuery = useQuery<Movie[]>({
    initialData: [] as Movie[],
    useErrorBoundary: true,
    queryKey: ["upcomingMovies"],
    queryFn: () => fetchMovies("upcoming"),
  });

  return (
    <div className="w-full flex flex-col gap-4 lg:gap-8">
      <MoviesGrid
        movies={popularMoviesQuery.data}
        isLoading={popularMoviesQuery.isLoading}
      >
        <h2 className="text-center text-xl lg:text-2xl font-semibold">
          Popular Movies
        </h2>
      </MoviesGrid>
      <MoviesGrid
        movies={nowPlayingMoviesQuery.data}
        isLoading={nowPlayingMoviesQuery.isLoading}
      >
        <h2 className="text-center text-xl lg:text-2xl font-semibold">
          Now Playing
        </h2>
      </MoviesGrid>
      <MoviesGrid
        movies={topRatedMoviesQuery.data}
        isLoading={topRatedMoviesQuery.isLoading}
      >
        <h2 className="text-center text-xl lg:text-2xl font-semibold">
          Top Rated Movies
        </h2>
      </MoviesGrid>
      <MoviesGrid
        movies={upcomingMoviesQuery.data}
        isLoading={upcomingMoviesQuery.isLoading}
      >
        <h2 className="text-center text-xl lg:text-2xl font-semibold">
          Upcoming Movies
        </h2>
      </MoviesGrid>
    </div>
  );
}

export function ErrorBoundary() {
  return (
    <div className="flex flex-col items-center justify-center m-2 md:m-4 lg:m-8 gap-4 lg:gap-8">
      <h1 className="font-semibold text-xl lg:text-3xl">Error</h1>
      <p className="text-lg">
        Something went wrong while fetching movies. Please try again later.
      </p>
    </div>
  );
}
