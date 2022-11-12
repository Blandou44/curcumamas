import React from "react";
import styled from "styled-components";

import heroImage from "../images/hero.jpg";

import background from "../images/illustrations/grains2.png";

import { maxWidth, applySidePadding, NewButton } from "../styles/theme";

const HeroContainer = styled.div`
  ${applySidePadding("1.5rem")};
`;

const HeroWrapper = styled.nav`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr auto;
  gap: 2rem;
  background: url(${heroImage});
  background-size: cover;
  position: relative;
  max-width: ${maxWidth};
  height: 620px;
  margin: 0 auto;

  &::before {
    content: url(${background});
    position: absolute;
    top: 440px;
    left: -140px;
    transform: scale(0.7);
  }
`;

const Quote = styled.p`
  font-family: "Rubik", sans-serif;
  font-size: 2.2rem;
  color: white;
  grid-column: 2 / 4;
  grid-row: 1;
  font-weight: bold;
  padding-right: 2rem;
`;

const CTA = styled(NewButton)`
  grid-column: 2 / 2;
  grid-row: 2;
  margin-bottom: 2rem;
`;

export const NewHero = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <Quote>
          &laquo; Vos bébés naissent, vos familles avec.
          <br />
          Un post partum gourmand et accompagné commence avec Curcumamas &raquo;
        </Quote>
        <CTA to="/curcumagasin/formules" secondary>
          Commandez
        </CTA>
      </HeroWrapper>
    </HeroContainer>
  );
};
