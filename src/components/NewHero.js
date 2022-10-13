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
} from "../styles/theme";

const HeroWrapper = styled.nav`
  padding: 1.5rem ${sidePadding};
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;

  max-width: ${maxWidth};
  margin: 0 auto;
`;

const Quote = styled.p`
  grid-column: 1 / 2;
  font-size: 2rem;
  font-weight: bold;
  position: relative;
  z-index: 10;

  &::before {
    content: url(https://placekitten.com/200/100);
    position: absolute;
    z-index: -1;
    top: 7rem;
    left: -5rem;
    transform: rotate(55deg);
  }
`;

const Illustration = styled.img`
  align-self: center;
  justify-self: flex-end;
  grid-column: 2 / 2;
`;

const CTA = styled(NewButton)`
  grid-column: 2 / 2;
`;

export const NewHero = () => {
  return (
    <HeroWrapper>
      <Quote>
        &laquo;Votre bébé né, une famille aussi. La promesse d'un post partum
        gourmand, serein et récupérateur, commence avec vos plats
        curcumamas&raquo;
      </Quote>
      <Illustration src="https://placekitten.com/260/300"></Illustration>
      <CTA to="/curcumagasin">Commandez</CTA>
    </HeroWrapper>
  );
};
