import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import motif from "../images/fondlea.jpeg";
import mimou from "../images/nos-services/mimourecadre.png";
import cake from "../images/carousel/24.jpg";
import manger from "../images/nos-services/mangerreacdre.png";
import scrounch from "../images/nos-services/scrounch.jpeg";

import {
  mainColor,
  maxWidth,
  newMainColor,
  sidePadding,
  NewButton,
  Heading,
  applySidePadding,
  smallBreakpoint,
  newSecondaryColor,
} from "../styles/theme";

const MotifWrapper = styled.div`
  background: url(${motif});
`;

const WhachaWaitingForContainer = styled.nav`
  ${applySidePadding("5rem")};
  max-width: ${maxWidth};
  margin: 0 auto;
`;

const WhachaWaitingForWrapper = styled.nav`
  border-radius: 1rem;
  ${applySidePadding("3rem")};
  box-shadow: 0px 0px 15px 4px #00000033;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: ${smallBreakpoint}) {
    font-size: 2.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const SmallHeading = styled.h2`
  font-family: "Rubik", sans-serif;
  font-size: 1.7rem;
  text-align: center;
  font-weight: 800;
  grid-column: span 4;
  color: ${newMainColor};
`;

const Argument = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 52% 48% 61% 39% / 71% 52% 48% 29%;
  }

  > p {
    font-family: "Rubik", sans-serif;
    font-size: 1.4rem;
    text-align: center;

    em,
    strong {
      font-style: normal;
      font-weight: 800;
    }

    strong {
      color: ${newSecondaryColor};
    }
  }
`;

export const WhachaWaitingFor = () => {
  return (
    <MotifWrapper>
      <WhachaWaitingForContainer>
        <WhachaWaitingForWrapper>
          <SmallHeading>
            Vos bébés naissent et vos familles avec, elles ont besoin de :
          </SmallHeading>
          <Argument>
            <img src={mimou}></img>
            <p>
              Du <strong>temps</strong> pour <em>soi</em> et pour être avec son{" "}
              <em>bébé</em> sans faire les tâches du quotidien
            </p>
          </Argument>
          <Argument>
            <img src={cake}></img>
            <p>
              De sérénité, de <strong>réconfort</strong> et de{" "}
              <em>gourmandise</em> saine
            </p>
          </Argument>
          <Argument>
            <img src={manger}></img>
            <p>
              D'<strong>apports nutritionnels</strong> indispensables pour{" "}
              <em>récupérer</em>
            </p>
          </Argument>
          <Argument>
            <img src={scrounch}></img>
            <p>
              Du <strong>soutien</strong> de la tribu et des{" "}
              <strong>cadeaux de naissance</strong> qui font du bien
            </p>
          </Argument>
        </WhachaWaitingForWrapper>
      </WhachaWaitingForContainer>
    </MotifWrapper>
  );
};
