import React from "react";
import styled from "styled-components";

import ludi from "../images/ludi.jpg";
import blandoux from "../images/blandoux.jpg";
import background from "../images/illustrations/grains2.png";
import {
  maxWidth,
  applySidePadding,
  NewButton,
  Heading,
  smallBreakpoint,
} from "../styles/theme";

const PortraitWrapper = styled.nav`
  ${applySidePadding("1.5rem")};
  display: flex;
  flex-direction: column;
  position: relative;

  max-width: ${maxWidth};
  margin: 0 auto;

  > ${Heading} {
    grid-column: span 2;
  }
  &::before {
    content: url(${background});
    position: absolute;
    top: 336px;
    left: 32%;
    transform: scale(0.6) rotate(284deg);
  }

  @media (min-width: ${smallBreakpoint}) {
    display: grid;
    grid-template-columns: 3fr 500px;
    row-gap: 2rem;
    column-gap: 2rem;
    align-items: flex-start;

    &::before {
      top: 70%;
      left: 600px;
    }
  }
`;

const Description = styled.p`
  grid-column: 1 / 2;
  font-family: "Rubik", sans-serif;
  font-size: 1.4rem;
`;

const Illustration = styled.img`
  height: 100%;
`;

const IllustrationsWrapper = styled.div`
  display: flex;
  height: 350px;
  gap: 3rem;
  align-self: center;
  justify-self: flex-end;
  grid-column: 2 / 2;
  grid-row: span 2;
  width: 35%;
  margin-right: 20%;

  @media (min-width: ${smallBreakpoint}) {
    width: 100%;
    margin-right: 0;
  }
`;

export const Portrait = () => {
  return (
    <PortraitWrapper>
      <Heading>
        Vous avez dit <em>Curcumamas</em> ?
      </Heading>
      <Description>
        Blandine a fondé Curcumamas en janvier 2021, formée en nutrition et
        accompagnement de la femme enceinte et en post partum, elle a élaboré
        des recettes pour répondre aux besoins nutritionnels particuliers de la
        jeune mère.
        <br />
        <br />
        Au même moment, Ludivine passait son CAP Cuisine pendant la grossesse de
        son deuxième enfant. Elle a rejoint l’aventure Curcumamas en mai 2022 et
        a repris les rênes de l’entreprise en solo.
        <br />
        <br />
        Cuisiner pour les futures et jeunes mamans est pour elle une vocation et
        une passion.
      </Description>
      <IllustrationsWrapper>
        <Illustration src={ludi}></Illustration>
        <Illustration src={blandoux}></Illustration>
      </IllustrationsWrapper>
    </PortraitWrapper>
  );
};
