import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";
import Headroom from "react-headroom";
import {
  mainColor,
  maxWidth,
  secondaryColor,
  sidePadding,
  smallBreakpoint,
} from "../styles/theme";

const NavContainer = styled.div`
  background: ${mainColor};
`;

const NavWrapper = styled.nav`
  padding: 1.5rem ${sidePadding};
  display: flex;
  justify-content: space-between;

  max-width: ${maxWidth};
  margin: 0 auto;
`;

const Link = styled(AnchorLink)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    color: ${secondaryColor};
  }
`;

export const NewNavBar = () => {
  return (
    <Headroom>
      <NavContainer>
        <NavWrapper>
          <Link to="/index">Accueil</Link>
          <Link to="/curcumagasin">Curcumagasin</Link>
          <Link to="/nos-services">Nos Services</Link>
          <Link to="/a-propos">à propos</Link>
          <Link to="/blog">Blog</Link>
        </NavWrapper>
      </NavContainer>
    </Headroom>
  );
};
