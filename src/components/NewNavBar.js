import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";
import Headroom from "react-headroom";
import {
  mainColor,
  maxWidth,
  newMainColor,
  newSecondaryColor,
  secondaryColor,
  sidePadding,
  smallBreakpoint,
} from "../styles/theme";

const NavContainer = styled.div`
  background: ${newMainColor};
`;

const NavWrapper = styled.nav`
  padding: 0 ${sidePadding};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3rem;

  max-width: ${maxWidth};
  margin: 0 auto;
`;

const LogoWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;

  > .gatsby-image-wrapper {
    height: 4rem;
    filter: brightness(100);
    width: 113px;
  }
`;

const Link = styled(AnchorLink)`
  color: transparent;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Rubik", sans-serif;
  font-family: "Rubik Mono One", sans-serif;

  -webkit-text-stroke: 2px white;
  text-stroke: 2px white;

  ${(props) =>
    props.selected &&
    `
      color: white;
    -webkit-text-stroke: 0px white;
    text-stroke: 0px white;`};

  &:hover {
    color: white;
    -webkit-text-stroke: 0px white;
    text-stroke: 0px white;
  }
`;

export const NewNavBar = () => {
  const path = window.location.pathname;

  return (
    <Headroom>
      <NavContainer>
        <NavWrapper>
          <LogoWrapper>
            <StaticImage
              src="../images/logo-curcumamas-bleu.png"
              alt="logo"
              objectFit="contain"
            />
          </LogoWrapper>
          <Link
            to="/nouvel-index-secret-de-ouf"
            selected={path === "/nouvel-index-secret-de-ouf"}
          >
            Accueil
          </Link>
          <Link to="/curcumagasin" selected={path === "/curcumagasin"}>
            Curcumagasin
          </Link>
          <Link to="/nos-services" selected={path === "/nos-services"}>
            Nos Services
          </Link>
        </NavWrapper>
      </NavContainer>
    </Headroom>
  );
};
