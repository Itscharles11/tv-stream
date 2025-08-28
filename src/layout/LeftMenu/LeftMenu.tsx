import { useState } from "react";
import { ListItemText } from "@mui/material";
import {
  Aside,
  Header,
  UserAvatar,
  Username,
  Nav,
  NavList,
  NavItemButton,
  NavItemIcon,
  IconImg,
  Footer,
  FooterButton,
} from "./LeftMenu.styled";
import SearchIcon from '@/assets/icons/ICON-Search.png';
import HomeIcon from '@/assets/icons/Group46.png';
import TvIcon from '@/assets/icons/Group56.png';
import MoviesIcon from '@/assets/icons/Group54.png';
import GenresIcon from '@/assets/icons/Group53.png';
import LaterIcon from '@/assets/icons/Group47.png';
import BackgroundImage from '@/assets/FeaturedCoverImage.png';

type Item = {
  key: string;
  label: string;
  icon: string;
};

const NAV_ITEMS: Item[] = [
  { key: "search", label: "Search", icon: SearchIcon },
  { key: "home", label: "Home", icon: HomeIcon },
  { key: "tv", label: "TV Shows", icon: TvIcon },
  { key: "movies", label: "Movies", icon: MoviesIcon },
  { key: "genres", label: "Genres", icon: GenresIcon },
  { key: "later", label: "Watch Later", icon: LaterIcon },
];

const FOOTER_ITEMS: string[] = ["LANGUAGE", "GET HELP", "EXIT"];

export function LeftMenu() {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [activeKey, setActiveKey] = useState<string>("home");

  const onEnter = () => setMenuExpanded(true);
  const onLeave = () => setMenuExpanded(false);

  return (
    <Aside
      menuExpanded={menuExpanded}
      onMouseOver={onEnter}
      onMouseLeave={onLeave}
    >
      <Header>
        {menuExpanded && (
          <>
            <UserAvatar
              src={BackgroundImage}
              alt="Daniel profile"
            />
            <Username>Daniel</Username>
          </>
        )}
      </Header>

      <Nav role="navigation" menuExpanded={menuExpanded}>
        <NavList>
          {NAV_ITEMS.map((item) => {
            const isActive = item.key === activeKey;
            return (
              <NavItemButton
                key={item.key}
                active={isActive}
                onClick={() => setActiveKey(item.key)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveKey(item.key);
                  }
                }}
              >
                <NavItemIcon>
                  <IconImg src={item.icon} alt="" aria-hidden />
                </NavItemIcon>
                {menuExpanded && (
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      sx: { whiteSpace: "nowrap", fontSize: 18 },
                    }}
                  />
                )}
              </NavItemButton>
            );
          })}
        </NavList>
      </Nav>

      {menuExpanded && (
        <Footer>
          {FOOTER_ITEMS.map((t) => (
            <FooterButton key={t}>{t}</FooterButton>
          ))}
        </Footer>
      )}
    </Aside>
  );
}
