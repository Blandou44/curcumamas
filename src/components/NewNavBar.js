import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";
import Headroom from "react-headroom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  applySidePadding,
  maxWidth,
  newMainColor,
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

const LogoWrapper = styled(AnchorLink)`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;

  > .gatsby-image-wrapper {
    height: 4rem;
    filter: brightness(0) invert(1);
    width: 113px;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-column: span 2;

  @media (min-width: ${smallBreakpoint}) {
    grid-column: span 1;
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
  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Headroom
      disable={isOpen}
      style={{
        zIndex: 10000,
        height: isOpen ? "100vh" : "auto",
        position: isOpen ? "fixed" : "auto",
        width: "100%",
      }}
    >
      <NavContainer isOpen={isOpen}>
        <NavWrapper>
          <LogoWrapper to="/" selected={path === "/"}>
            <StaticImage
              src="../images/logo-curcumamas-bleu.png"
              alt="logo"
              objectFit="contain"
              loading="eager"
              placeholder="None"
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
            <Link to="/" selected={path === "/"}>
              Accueil
            </Link>
            <Link
              to="/curcumagasin/formules"
              selected={path.includes("/curcumagasin")}
            >
              Curcumagasin
            </Link>
            <Link
              to="/qui-sommes-nous"
              selected={path.includes("/qui-sommes-nous")}
            >
              Qui sommes nous
            </Link>
          </LinksWrapper>
        </NavWrapper>
      </NavContainer>
    </Headroom>
  );
};
