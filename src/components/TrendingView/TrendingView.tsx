import { useEffect, useMemo, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { moviesData, type Movie } from "./utils";
import { Root, Title, Viewport, Track, Slide, Card, Poster } from "./TrendingView.styled";

export const TrendingView = ({
  onSelectMovie,
}: {
  onSelectMovie: (movie: Movie) => void;
}) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const seenIds = useMemo<string[]>(() => {
    try {
      const raw = sessionStorage.getItem("lastSeenMovie");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }, []);

  useEffect(() => {
    const rank = new Map(seenIds.map((id, idx) => [id, idx]));
    const ranked = [...moviesData].sort((a, b) => {
      const aSeen = rank.has(a.Id) ? (rank.get(a.Id) as number) : Number.POSITIVE_INFINITY;
      const bSeen = rank.has(b.Id) ? (rank.get(b.Id) as number) : Number.POSITIVE_INFINITY;
      if (aSeen !== bSeen) return aSeen - bSeen;
      return new Date(b.Date).getTime() - new Date(a.Date).getTime();
    });
    setMovies(ranked.slice(0, 50));
  }, [seenIds]);

  const emblaOptions: { [key: string]: string | boolean } = {
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  };

  const [viewportRef, embla] = useEmblaCarousel(emblaOptions);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollPrev();
      }
    },
    [scrollNext, scrollPrev]
  );

  const handleClick = (movie: Movie) => {
    onSelectMovie(movie);
    const raw = sessionStorage.getItem("lastSeenMovie");
    const prev: string[] = raw ? JSON.parse(raw) : [];
    const updated = [movie.Id, ...prev.filter((id) => id !== movie.Id)];
    sessionStorage.setItem("lastSeenMovie", JSON.stringify(updated));
  };

  return (
    <Root>
      <Title variant="h5">
        Trending Now
      </Title>

      <Viewport ref={viewportRef} onKeyDown={handleKeyDown} tabIndex={0} role="region" aria-label="Trending carousel">
        <Track>
          {movies.map((movie) => (
            <Slide key={movie.Id}>
              <Card onClick={() => handleClick(movie)}>
                <Poster
                  src={`${import.meta.env.BASE_URL}assets/${movie.CoverImage}`}
                  alt={movie.Title}
                  loading="lazy"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  sizes="(max-width: 400px) 50vw, (max-width: 600px) 33vw, (max-width: 900px) 25vw, (max-width: 1200px) 16vw, 12vw"
                />
              </Card>
            </Slide>
          ))}
        </Track>
      </Viewport>
    </Root>
  );
};
