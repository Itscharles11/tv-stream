import { styled } from "@mui/material/styles";
import Box, { type BoxProps } from "@mui/material/Box";
import { Typography, Button } from "@mui/material";

export const Root = styled(Box)<BoxProps>({
  flex: 1,
  overflowX: "hidden",
});

export const Banner = styled(Box)<BoxProps>({
  position: "relative",
  borderRadius: 8,
  overflow: "hidden",
  marginBottom: 30,
  minHeight: 420,
  display: "flex",
  alignItems: "stretch",
});

export const BannerMedia = styled(Box)<BoxProps>({
  position: "absolute",
  inset: 0,
  zIndex: 0,
  overflow: "hidden",
});

export const BannerVideo = styled("video")({
  width: 500,
  height: 500,
  objectFit: "cover",
  display: "block",
});

export const BannerContent = styled(Box)<BoxProps>({
  position: "relative",
  zIndex: 1,
  flex: 1,
  maxWidth: "50%",
  padding: 24,
});

export const Tag = styled(Typography)({
  fontSize: 36,
  letterSpacing: 2,
  textTransform: "uppercase",
  opacity: 0.7,
});

export const Title = styled(Typography)({
  fontSize: 60,
  margin: "10px 0",
  fontWeight: "bold",
});

export const Meta = styled(Typography)({
  fontSize: 24,
  marginBottom: 15,
  opacity: 0.85,
});

export const Desc = styled(Typography)({
  fontSize: 24,
  lineHeight: 1.5,
  marginBottom: 20,
  opacity: 0.9,
  maxWidth: "90%",
});

export const TitleImage = styled("img")({
  maxWidth: "100%",
  marginTop: 8,
  marginBottom: 8,
});

export const ButtonsRow = styled(Box)<BoxProps>({
  display: "flex",
  gap: 8,
});

export const PlayButton = styled(Button)({
  background: "white",
  color: "black",
  padding: "16px 32px",
  borderRadius: 25,
  fontWeight: "bold",
  fontSize: 25,
  textTransform: "none",
  "&:hover": { background: "rgba(255,255,255,0.85)" },
});

export const InfoButton = styled(Button)({
  background: "blue",
  color: "white",
  padding: "16px 32px",
  borderRadius: 25,
  fontSize: 25,
  textTransform: "none",
  "&:hover": { background: "darkblue" },
});
