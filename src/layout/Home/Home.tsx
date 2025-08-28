import { useEffect, useMemo, useRef, useState } from "react";
import { Box } from "@mui/material";
import { LeftMenu } from "../LeftMenu/LeftMenu";
import { TrendingView } from "../../components/TrendingView/TrendingView";
import { MainContent } from "../../components/MainContent/MainContent";
import { moviesData, type Movie } from "../../components/TrendingView/utils";

export function Home() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(
    moviesData[0]
  );
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const videoSrc = useMemo(
    () => selectedMovie?.VideoUrl ?? "",
    [selectedMovie]
  );

  useEffect(() => {
    setShowVideo(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    if (videoSrc) {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        if (videoRef.current) {
          const v = videoRef.current;
          v.muted = true;
          const playPromise = v.play();
          if (playPromise && typeof playPromise.then === "function") {
            playPromise
              .then(() => {
                setShowVideo(true);
              })
              .catch((err) => {
                console.warn("Video can't play, fallback to image", err);
                setShowVideo(false);
              });
          } else {
            setShowVideo(true);
          }
        }
      }, 2000);
    }

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [videoSrc]);

  const hasVideo = Boolean(videoSrc);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        color: "white",
        height: "100vh",
        overflow: "hidden",
        background: !showVideo || !hasVideo ? "#000" : undefined,
        backgroundImage:
        !showVideo || !hasVideo
          ? `url('${import.meta.env.BASE_URL}assets/FeaturedCoverImage.png')`
          : undefined,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      {hasVideo && (
        <Box
          component="video"
          key={videoSrc}
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => {
            console.warn("Video error, fallback to image");
            setShowVideo(false);
          }}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: showVideo ? 1 : 0,
            transition: "opacity 300ms ease",
            pointerEvents: "none",
          }}
        />
      )}

      <Box sx={{ position: "relative", zIndex: 1, display: "flex", flex: 1 }}>
        <Box sx={{ position: "relative", height: "100vh", flex: "0 0 90px" }}>
          <LeftMenu />
        </Box>
        <Box sx={{ p: "50px", width: "100%" }}>
          <MainContent selectedMovie={selectedMovie} />
          <TrendingView onSelectMovie={setSelectedMovie} />
        </Box>
      </Box>
    </Box>
  );
}
