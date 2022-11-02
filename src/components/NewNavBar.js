import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";
import Headroom from "react-headroom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  applySidePadding,
  mainColor,
  maxWidth,
  newMainColor,
  newSecondaryColor,
  secondaryColor,
  sidePadding,
  sidePaddingSmall,
  smallBreakpoint,
} from "../styles/theme";

const NavContainer = styled.div`
  background: ${newMainColor};
  height: ${(props) => (props.isOpen ? `100vh;` : "4rem")};
  overflow: hidden;
  z-index: 1000;
`;

const NavWrapper = styled.nav`
  ${applySidePadding()};
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2.5rem;
  gap: 3rem;

  max-width: ${maxWidth};
  margin: 0 auto;

  @media (min-width: ${smallBreakpoint}) {
    grid-template-columns: 1fr auto;
  }
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

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${smallBreakpoint}) {
    flex-direction: row;
    gap: 3rem;
  }
`;

const Link = styled(AnchorLink)`
  color: transparent;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Rubik", sans-serif;
  font-family: "Rubik Mono One", sans-serif;

  -webkit-text-stroke: 2px white;
  text-stroke: 2px white;

  @media (min-width: ${smallBreakpoint}) {
    font-size: 1.2rem;
  }

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

const BurgerButton = styled.button`
  border: none;
  background: none;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;

  > svg {
    height: 100%;
  }

  @media (min-width: ${smallBreakpoint}) {
    display: none;
  }
`;

export const NewNavBar = () => {
  const path =
    typeof window !== "undefined"
      ? window.location.pathname
      : "/nouvel-index-secret-de-ouf";

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Headroom>
      <NavContainer isOpen={isOpen}>
        <NavWrapper>
          <LogoWrapper>
            <StaticImage
              src="../images/logo-curcumamas-bleu.png"
              alt="logo"
              objectFit="contain"
            />
          </LogoWrapper>
          <BurgerButton>
            <FontAwesomeIcon
              icon={isOpen ? faXmark : faBars}
              color="white"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </BurgerButton>
          <LinksWrapper>
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
          </LinksWrapper>
        </NavWrapper>
      </NavContainer>
    </Headroom>
  );
};
