import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";
import Headroom from "react-headroom";
import mains from "../images/illustrations/mains.png";
import motif from "../images/motif.png";

import {
  mainColor,
  maxWidth,
  newMainColor,
  sidePadding,
  NewButton,
  Heading,
  applySidePadding,
  smallBreakpoint,
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
    grid-template-columns: 1fr 1fr 1fr;
    > h1 {
      grid-column: span 3;
    }
  }
`;

const Argument = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > div {
    width: 100px;
    height: 100px;
    padding: 0.5rem;
    position: relative;

    > span {
      font-family: "Rubik Mono One", sans-serif;
      font-family: "Rubik", sans-serif;
      font-weight: 800;
      color: ${newMainColor};
      font-size: 2rem;
      position: absolute;
      top: 50%;
      width: 100%;
      text-align: center;
    }

    > img {
      width: 100%;
      position: absolute;
    }
  }

  > p {
    font-family: "Rubik", sans-serif;
    font-size: 1.4rem;
    text-align: center;
  }
`;

export const WhachaWaitingFor = () => {
  return (
    <MotifWrapper>
      <WhachaWaitingForContainer>
        <WhachaWaitingForWrapper>
          <Heading>
            Qu'attendez-vous pour prendre soin <em>de vous et votre tribu</em> ?
          </Heading>
          <Argument>
            <div>
              <img src={mains}></img>
              <span>1800h</span>
            </div>
            <p>
              C’est le temps qu’un parent passe à allaiter ou biberonner la 1ère
              année. Un travail à temps plein est de 1820h
            </p>
          </Argument>
          <Argument>
            <div>
              <img src={mains}></img>
              <span>+25%</span>
            </div>
            <p>
              C’est le besoin supplémentaire journalier d’une femme en post
              partum.
            </p>
          </Argument>
          <Argument>
            <div>
              <img src={mains}></img>
              <span>20%</span>
            </div>
            <p>Des mères déclarent avoir fait une dépression post partum</p>
          </Argument>
        </WhachaWaitingForWrapper>
      </WhachaWaitingForContainer>
    </MotifWrapper>
  );
};
