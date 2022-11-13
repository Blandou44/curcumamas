import React from "react";
import styled from "styled-components";

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
    grid-template-columns: 3fr 250px;
    row-gap: 2rem;
    column-gap: 27rem;
    align-items: flex-start;

    &::before {
      top: 283px;
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
        Blandine est la fondatrice de Curcumamas. <br /> Formée en nutrition de
        la femme enceinte et en post partum, en massage pré et post natals, et
        dans l'accompagnement de la grossesse et du post partum, elle propose
        des consultations et suivis autour des ces enjeux, pour aborder au mieux
        ces périodes. Elle met toute son expertise et sa passion au service des
        familles et donc de Curcumamas.
      </Description>
      <Illustration src={blandoux}></Illustration>
    </PortraitWrapper>
  );
};
