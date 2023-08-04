import React from "react";
import { Link } from "react-router-dom";
import style from "styled-components";
import { colors, FlexWrapper } from "../common/share_styles";

const NavBarWrapper = style.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  z-index: 10;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${colors.grey1}
  `;

const InitialLinkWrapper = style(Link)`
  font-family: 'Dancing Script', cursive;
  margin: 1rem;
  color: ${colors.grey4};
  font-size: 2rem;
  text-decoration: none;
`;

const HomeNavLinks = style(FlexWrapper)`
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: ${colors.grey4};
  margin-right: 1rem;
`;

const IconLink = style(Link)`
  color: ${colors.grey4};
  text-decoration: none;
  font-family: 'Economica',sans-serif;
  font-size: 1.5rem;
  letter-spacing: 1px;
`;

const links = [
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Resume",
    to: "/resume",
  },
  {
    name: "Projects",
    to: "/projects",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];

function AppBar() {
  return (
    <NavBarWrapper>
      <InitialLinkWrapper to="/">L . Y .</InitialLinkWrapper>
      <HomeNavLinks>
        {links.map(link => (
          <IconLink to={link.to} key={link.name}>
            {link.name}
          </IconLink>
        ))}
      </HomeNavLinks>
    </NavBarWrapper>
  );
}

export default AppBar;
