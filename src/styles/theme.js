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
