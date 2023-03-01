import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";
import Headroom from "react-headroom";
import {
  maxWidth,
  newMainColor,
  newSecondaryColor,
  sidePadding,
  smallBreakpoint,
} from "../styles/theme";

const NavContainer = styled.nav`
  background: ${newMainColor};
  height: 5rem;

  @media (max-width: ${smallBreakpoint}) {
    display: none;
  }
`;

const NavWrapper = styled.nav`
  padding: 0.5rem ${sidePadding};
  display: grid;

  grid-template-columns: 200px 1fr auto auto auto auto;
  column-gap: 2rem;

  max-width: ${maxWidth};
  margin: 0 auto;
`;

const LogoContainer = styled(AnchorLink)`
  background: white;
  border-radius: 65% 35% 41% 59% / 35% 55% 45% 65%;

  > div.gatsby-image-wrapper {
    max-height: 4rem;
  }
`;

const Link = styled(AnchorLink)`
  color: ${newSecondaryColor};
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
        <NavWrapper>
          <LogoContainer to="/">
            <StaticImage
              src="../images/logo.png"
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
        </NavWrapper>
      </NavContainer>
    </Headroom>
  );
};
