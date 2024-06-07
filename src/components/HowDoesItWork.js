import React from "react";
import styled from "styled-components";
import allongee from "../images/illustrations/allongee.png";
import menu from "../images/illustrations/menu.png";
import legumes from "../images/illustrations/legumes.png";
import sac from "../images/illustrations/sac.png";
import cadeau from "../images/illustrations/cadeau.png";

import {
  maxWidth,
  newMainColor,
  applySidePadding,
  Heading,
  MotifWrapper,
  smallBreakpoint,
  newSecondaryColor,
} from "../styles/theme";

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

const Point = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  position: relative;

  > img {
    max-width: 100px;
    max-height: 100px;
    object-fit: contain;
  }

  > p {
    font-family: "Rubik", sans-serif;
    font-size: 1.4rem;
  }

  @media (min-width: ${smallBreakpoint}) {
    gap: 2rem;

    > p {
      max-width: 66%;
    }

    flex-direction: row;

    &:not(:last-child)::before {
      content: "";
      display: block;
      width: 700px;
      height: 3px;
      background: ${newSecondaryColor};
      position: absolute;
      left: calc(0);
      top: calc(100% + 1rem);
    }
    &:nth-child(odd) {
      flex-direction: row-reverse;

      > p {
        text-align: right;
      }
    }
  }
`;

export const HowDoesItWork = () => {
  return (
    <MotifWrapper>
      <HowDoesItWorkContainer>
        <HowDoesItWorkWrapper>
          <Heading>
            Comment ça <em>curcumarche</em> ?
          </Heading>
          <Point>
            <img alt="" src={allongee}></img>
            <p>
              Vous commandez pour vous ou pour offrir en choisissant votre
              formule ou votre carte cadeau.
            </p>
          </Point>
          <Point>
            <img alt="" src={menu}></img>
            <p>
              Vous décidez de faire les courses vous-mêmes avec une liste
              détaillée préparée par nos soins ou vous nous confiez cette
              mission.
            </p>
          </Point>
          <Point>
            <img alt="" src={legumes}></img>
            <p>
              Les formules et cartes cadeaux sont des assortiments qui Vous
              réservez votre créneau en ligne ou laissez les nouveaux parents le
              faire plus tard.
            </p>
          </Point>
          <Point>
            <img alt="" src={sac}></img>
            <p>
              Ludivine se déplace au domicile des futurs ou nouveaux parents
              pour une session de cuisine (entre 2 et 4h selon la formule) à
              Toulouse et en région Toulousaine.
              <br />
              <br />
              Seule la formule Curcu-goûter peut être envoyée partout en France.
            </p>
          </Point>
          <Point>
            <img alt="" src={cadeau}></img>
            <p>
              Tous les plats sont pensés pour être stockés au frigo (pendant 3
              jours) ou au congélateur (pendant 3 mois).
              <br />
              <br />
              Ludivine se charge bien évidemment de laisser la cuisine et la
              vaisselle propres.
            </p>
          </Point>
        </HowDoesItWorkWrapper>
      </HowDoesItWorkContainer>
    </MotifWrapper>
  );
};
