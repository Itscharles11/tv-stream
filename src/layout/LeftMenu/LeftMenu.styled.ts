import { styled } from "@mui/material/styles";
import { Box, Avatar, Typography, List, ListItemButton, ListItemIcon, Button } from "@mui/material";

export const COLLAPSED_W = 90;
export const EXPANDED_W = 240;

export const Aside = styled(Box, {
  shouldForwardProp: (prop) => prop !== "menuExpanded",
})<{ menuExpanded: boolean }>(({ menuExpanded }) => ({
  position: "absolute",
  inset: "0 auto 0 0",
  width: menuExpanded ? EXPANDED_W : COLLAPSED_W,
  background: "#040404",
  padding: "16px 10px",
  display: "flex",
  flexDirection: "column",
  gap: 16,
  justifyContent: "flex-start",
  zIndex: 2,
  transition: "width 0.2s ease",
  height: '100vh',
  ...(menuExpanded && {
    opacity: 0.8,
    boxShadow: "10px 0 28px rgba(0,0,0,0.4)",
  }),
}));

export const Header = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 12,
  padding: "8px 8px 0 8px",
  minHeight: 52,
  marginLeft: 12,
  marginTop: 20,
});

export const UserAvatar = styled(Avatar)({
  width: 70,
  height: 70,
});

export const Username = styled(Typography)({
  color: "#ffffff",
  fontWeight: 600,
  fontSize: 36,
});

export const Nav = styled(Box, {
  shouldForwardProp: (prop) => prop !== "menuExpanded",
})<{ menuExpanded: boolean }>(({ menuExpanded }) => ({
  marginTop: 80,
  flex: "1 1 auto",
  ...(menuExpanded && {
    marginTop: 60,
  }),
}));

export const NavList = styled(List)({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  padding: 0,
  margin: 0,
});

export const NavItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ active }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 14,
  padding: "15px 30px",
  borderRadius: 25,
  color: active ? "#ffffff" : "#a9a9a9",
  fontSize: 18,
  lineHeight: 1,
  userSelect: "none",
  outline: "none",
  transition:
    "background-color 0.18s ease, color 0.18s ease, transform 0.1s ease",
  "&:hover": {
    color: "#ffffff",
    backgroundColor: "#323b57",
  },
  "&.Mui-focusVisible": {
    boxShadow: "0 0 0 2px #596da7",
  },
  ...(active && {
    backgroundColor: "#3B486D",
  }),
}));

export const NavItemIcon = styled(ListItemIcon)({
  minWidth: 0,
});

export const IconImg = styled("img")({});

export const Footer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: 8,
});

export const FooterButton = styled(Button)({
  background: "transparent",
  border: "none",
  color: "#a9a9a9",
  letterSpacing: "0.12em",
  fontSize: 24,
  textAlign: "left",
  justifyContent: "flex-start",
  padding: "5px 25px",
  transition: "color 0.18s ease",
  textWrap: 'nowrap',
  "&:hover": {
    color: "#ffffff",
    background: "transparent",
  },
});
