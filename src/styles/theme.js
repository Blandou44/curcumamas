import styled, { createGlobalStyle } from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const mainColor = "#032aaf";
export const secondaryColor = "#F78B1E";
export const grey10 = "#f7f7f7";
export const grey20 = "#dee2e6";

export const sidePadding = "6rem";
export const sidePaddingSmall = "1rem";

export const maxWidth = "1200px";
export const smallBreakpoint = "930px";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
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

export const NewButton = styled(AnchorLink)`
  border: none;
  background: ${(props) => (props.secondary ? secondaryColor : mainColor)};
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;

  &:hover {
    color: ${(props) => (props.secondary ? mainColor : secondaryColor)};
  }
`;

export const Heading = styled.h1`
  grid-column: span 4;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${secondaryColor};
  margin: 0;
  text-align: center;
`;

export const Argument = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid ${mainColor};
    padding: 0.5rem;
  }

  > p {
    font-size: 1.4rem;
    text-align: center;
  }
`;
