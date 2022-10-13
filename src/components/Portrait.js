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
  NewButton,
  Heading,
} from "../styles/theme";

const PortraitWrapper = styled.nav`
  padding: 1.5rem ${sidePadding};
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;

  max-width: ${maxWidth};
  margin: 0 auto;

  > ${Heading} {
    grid-column: span 2;
  }
`;

const Description = styled.p`
  grid-column: 1 / 2;
  font-size: 1.6rem;
`;

const Illustration = styled.img`
  align-self: center;
  justify-self: flex-end;
  grid-column: 2 / 2;
`;

const CTA = styled(NewButton)`
  grid-column: 1 / 2;
  justify-self: flex-start;
`;

export const Portrait = () => {
  return (
    <PortraitWrapper>
      <Heading>Vous avez dit Curcumama ?</Heading>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute
      </Description>
      <Illustration src="https://placekitten.com/244/300"></Illustration>
      <CTA to="/a-propos">En savoir plus</CTA>
    </PortraitWrapper>
  );
};
