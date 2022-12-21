import React from "react";
import styled from "styled-components";
import allongee from "../images/illustrations/allongee_bleu.png";
import menu from "../images/illustrations/menu_bleu.png";
import legumes from "../images/illustrations/legumes_bleu.png";
import sac from "../images/illustrations/sac_bleu.png";
import cadeau from "../images/illustrations/cadeau_bleu.png";

import {
  maxWidth,
  newMainColor,
  applySidePadding,
  Heading,
  MotifWrapper,
  smallBreakpoint,
} from "../styles/theme";

const BigMotifWrapper = styled(MotifWrapper)`
  color: white;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
  }
`;

const HowDoesItWorkContainer = styled.nav`
  ${applySidePadding("5rem")};
  max-width: ${maxWidth};
  margin: 0 auto;
`;

const HowDoesItWorkWrapper = styled.div`
  box-shadow: 0px 0px 15px 4px #00000033;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 1rem;
  ${applySidePadding("3rem")};
`;

export const Curcumaintenance = () => {
  return (
    <BigMotifWrapper>
      <HowDoesItWorkContainer>
        <HowDoesItWorkWrapper>
          <Heading>
            Le site est en <em>Curcumaintenance</em>
          </Heading>
          <p>Nous revenons très vite !</p>
        </HowDoesItWorkWrapper>
      </HowDoesItWorkContainer>
    </BigMotifWrapper>
  );
};
