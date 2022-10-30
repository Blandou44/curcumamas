import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";
import Headroom from "react-headroom";
import allongee from "../images/illustrations/allongee_bleu.png";
import menu from "../images/illustrations/menu_bleu.png";
import legumes from "../images/illustrations/legumes_bleu.png";
import sac from "../images/illustrations/sac_bleu.png";
import cadeau from "../images/illustrations/cadeau_bleu.png";

import {
  mainColor,
  maxWidth,
  newMainColor,
  applySidePadding,
  NewButton,
  Argument,
  Heading,
  MotifWrapper,
  smallBreakpoint,
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
      background: ${newMainColor};
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
            <img src={allongee}></img>
            <p>
              Vous commandez de chez vous. <br />
              Fin de prise des commandes : vendredi 14h de la semaine précédant
              votre livraison.
            </p>
          </Point>
          <Point>
            <img src={menu}></img>
            <p>
              Vous composez votre panier comme vous le souhaitez parmi les choix
              à la carte et vous remplissez le formulaire en indiquant vos
              choix.
              <br />
              Deux options sont possibles : végé ou flexi (en supplément)
            </p>
          </Point>
          <Point>
            <img src={legumes}></img>
            <p>
              Les formules et cartes cadeaux comprennent 1 repas par jour pour
              une personne que vous êtes libres de partager (ou non).
              <br />
              Un repas comprend une entrée - un plat - un encas/dessert.
            </p>
          </Point>
          <Point>
            <img src={sac}></img>
            <p>
              Vous commandez et êtes livré&middot;e&middot;s la semaine suivante
              le mercredi avant 13h, chez vous, partout en Occitanie.
            </p>
          </Point>
          <Point>
            <img src={cadeau}></img>
            <p>
              Toutes les formules s’offrent en carte cadeau, pour vous même ou
              pour quelqu’un de votre tribu.
              <br />
              Vous pouvez les offrir quand vous le souhaitez : à l'avance et la
              famille nous contacte pour choisir ses menus et le moment où elle
              souhaite être livrée, ou la semaine qui précède la livraison pour
              qu’iels soient directement livré&middot;e&middot;s.
            </p>
          </Point>
        </HowDoesItWorkWrapper>
      </HowDoesItWorkContainer>
    </MotifWrapper>
  );
};
