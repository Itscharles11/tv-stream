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
import { assetUrl } from "../../lib/asset";

type Item = {
  key: string;
  label: string;
  icon: string;
};

const NAV_ITEMS: Item[] = [
  { key: "search", label: "Search", icon: assetUrl("/assets/icons/ICON - Search.png") },
  { key: "home", label: "Home", icon: assetUrl("/assets/icons/Group 46.png") },
  { key: "tv", label: "TV Shows", icon: assetUrl("/assets/icons/Group 56.png") },
  { key: "movies", label: "Movies", icon: assetUrl("/assets/icons/Group 54.png") },
  { key: "genres", label: "Genres", icon: assetUrl("/assets/icons/Group 53.png") },
  { key: "later", label: "Watch Later", icon: assetUrl("/assets/icons/Group 47.png") },
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
              src={`${assetUrl('/assets/FeaturedCoverImage.png')}`}
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
