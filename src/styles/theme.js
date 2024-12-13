import styled, { createGlobalStyle } from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import motif from "../images/fondleainvert.jpeg";

export const mainColor = "#132bd2";
export const secondaryColor = "#F78B1E";
export const grey10 = "#f7f7f7";
export const grey20 = "#dee2e6";

// nouveau site

export const colorBaie = "#4f3d63";
export const colorHerbes = "#8f9940";
export const colorPaprika = "#cc3300";
export const colorCurcuma = "#f26300";
export const colorMoutarde = "#f5a800";

export const newMainColor = "#132bd2";
export const newSecondaryColor = colorCurcuma;

export const sidePadding = "6rem";
export const sidePaddingSmall = "1rem";

export const maxWidth = "1200px";
export const smallBreakpoint = "930px";

export const applySidePadding = (vertical = "0") => `
  padding: ${vertical} ${sidePaddingSmall};
  @media (min-width: ${smallBreakpoint}) {
    padding: ${vertical} ${sidePadding};
  }
  `;

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
    padding: 0;
    font-family: "Rubik", sans-serif;
    font-size: 1.4rem;
    overflow-x: hidden;
  }

  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }


  p {
    color: ${newMainColor};
  }

  .headroom, .headroom--pinned, .headroom-wrapper {
    z-index: 1000;
  }
`;

export const Button = styled(AnchorLink)`
  background: ${secondaryColor};
  border: 0;
  padding: 1rem 24px;
  color: #fff;
  transition: 0.4s;
  border-radius: 5px;
  border: 2px solid #fff;
  text-decoration: none;
  font-size: 1rem;

  cursor: pointer;

  &:hover {
    background: ${mainColor};
  }
`;

export const MotifWrapper = styled.div`
  background: url(${motif});
`;

export const NewButton = styled(AnchorLink)`
  font-family: "Rubik Mono One", sans-serif;
  border: none;
  cursor: pointer;
  background: ${(props) =>
    props.secondary ? newSecondaryColor : newMainColor};
  color: transparent;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  z-index: 10;

  -webkit-text-stroke: 2px white;
  text-stroke: 2px white;

  &:hover {
    color: white;
    -webkit-text-stroke: 0px white;
    text-stroke: 0px white;
  }
`;

export const Heading = styled.h1`
  font-family: "Rubik Mono One", sans-serif;
  grid-column: span 5;
  font-size: 2rem;
  font-weight: bold;
  color: ${newMainColor};
  margin: 0;
  text-align: center;

  @media (min-width: ${smallBreakpoint}) {
    font-size: 2.5rem;
  }

  > em {
    color: transparent;
    -webkit-text-stroke: 3px ${newMainColor};
    text-stroke: 3px ${newMainColor};
    font-style: normal;
  }
`;

export const Argument = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > div {
    width: 100px;
    height: 100px;
    padding: 0.5rem;
    position: relative;

    > span {
      font-family: "Rubik Mono One", sans-serif;
      font-family: "Rubik", sans-serif;
      font-weight: 800;
      color: ${newMainColor};
      font-size: 2rem;
      position: absolute;
      top: 50%;
      width: 100%;
      text-align: center;
    }

    > img {
      width: 100%;
      position: absolute;
    }
  }

  > p {
    font-family: "Rubik", sans-serif;
    font-size: 1.4rem;
    text-align: center;
  }
`;

export const SmallText = styled.span`
  font-size: 0.9rem;
  font-family: "Rubik", sans-serif;
  font-weight: 300;
  font-style: italic;

  ${(props) => (props.center ? "text-align: center;" : "")};
  ${(props) => (props.right ? "text-align: right;" : "")};
`;
