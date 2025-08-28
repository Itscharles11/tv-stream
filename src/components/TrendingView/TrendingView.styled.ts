import { styled } from "@mui/material/styles";
import Box, { type BoxProps } from "@mui/material/Box";
import { Typography } from "@mui/material";

export const GAP_PX = 12;

export const Root = styled(Box)<BoxProps>(({ theme }) => ({
  width: "100%",
  paddingInline: 24,
  paddingBlock: 16,
  [theme.breakpoints.down("sm")]: {
    paddingInline: 12,
    paddingBlock: 12,
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: 8,
  ...theme.typography.h5,
  [theme.breakpoints.down("md")]: {
    ...theme.typography.h6,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    marginBottom: 6,
  },
}));

export const Viewport = styled(Box)<BoxProps>(({ theme }) => ({
  outline: "none",
  overflow: "hidden",
  width: "100%",
  touchAction: "pan-y",
  "--gap": `${GAP_PX}px`,
  "--perView": "8",
  [theme.breakpoints.down("lg")]: {
    "--perView": "6",
  },
  [theme.breakpoints.down("md")]: {
    "--perView": "4",
  },
  [theme.breakpoints.down("sm")]: {
    "--perView": "3",
  },
  [theme.breakpoints.down(400)]: {
    "--perView": "2",
  },
}));

export const Track = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  gap: `var(--gap)`,
  paddingBottom: 8,
  cursor: "grab",
  "&:active": { cursor: "grabbing" },

  [theme.breakpoints.down("sm")]: {
    paddingBottom: 6,
  },
}));

export const Slide = styled(Box)<BoxProps>({
  flex: `0 0 calc((100% - (var(--gap) * (var(--perView) - 1))) / var(--perView))`,
  minWidth: 0,
});

export const Card = styled(Box)<BoxProps>(({ theme }) => ({
  position: "relative",
  width: "100%",
  aspectRatio: "2 / 3",
  borderRadius: 8,
  overflow: "hidden",
  cursor: "pointer",
  transition: "transform 0.2s",
  height: "auto",
  "&:hover": { transform: "scale(1.02)" },

  [theme.breakpoints.down("sm")]: {
    borderRadius: 6,
    "&:hover": { transform: "scale(1.01)" },
  },
}));

export const Poster = styled("img")({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  userSelect: "none",
  WebkitUserDrag: "none",
});
