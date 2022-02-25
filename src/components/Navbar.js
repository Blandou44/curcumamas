import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";
import Headroom from "react-headroom";
import { mainColor, secondaryColor, sidePadding } from "../styles/theme";

const NavContainer = styled.nav`
  background: ${mainColor};
  height: 4rem;
  padding: 0.5rem ${sidePadding};
  display: grid;
  grid-template-columns: 200px 1fr auto auto auto auto;
  column-gap: 2rem;
`;

const LogoContainer = styled(AnchorLink)`
  background: white;
  border-radius: 5px;

  > div.gatsby-image-wrapper {
    max-height: 4rem;
  }
`;

const Link = styled(AnchorLink)`
  color: ${secondaryColor};
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;

  align-self: center;

  &:hover {
    color: white;
  }
`;

export const Navbar = ({ onContactClick }) => {
  return (
    <Headroom>
      <NavContainer>
        <LogoContainer to="/">
          <StaticImage
            src="../images/logo.jpg"
            alt="Curcumamas"
            imgStyle={{ objectFit: "contain" }}
          />
        </LogoContainer>
        <div></div>
        <Link to="/#menu">Menu</Link>
        <Link to="/#formules">Nos formules</Link>
        <Link to="/#plus">Nos autres offres</Link>
        <Link to="/#contact" onAnchorLinkClick={onContactClick}>
          Contact
        </Link>
      </NavContainer>
    </Headroom>
  );
};
