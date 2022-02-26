import styled, { createGlobalStyle } from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const mainColor = "#273470";
export const secondaryColor = "#bf8a34";
export const grey10 = "#f7f7f7";
export const grey20 = "#dee2e6";

export const sidePadding = "6rem";
export const sidePaddingSmall = "1rem";

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
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    background: ${mainColor};
  }
`;
