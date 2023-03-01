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
              Vous commandez de chez vous pour vous ou votre tribu.
              <br />
              Fin de prise des commandes : vendredi 14h de la semaine précédant
              votre livraison.
            </p>
          </Point>
          <Point>
            <img alt="" src={menu}></img>
            <p>
              Vous composez votre panier comme vous le souhaitez. Vous
              choisissez la formule qui vous convient dont vous composez le
              contenu comme vous souhaitez parmi les choix proposés.
              <br />
              Deux options sont possibles : végé ou flexi (en supplément)
            </p>
          </Point>
          <Point>
            <img alt="" src={legumes}></img>
            <p>
              Les formules et cartes cadeaux sont des assortiments qui
              contiennent plusieurs collations salées, collations sucrées et
              plats.
              <br />
              C’est à vous de les composer avec les options que vous souhaitez.
            </p>
          </Point>
          <Point>
            <img alt="" src={sac}></img>
            <p>
              Vous commandez et êtes livré&middot;e&middot;s la semaine suivante
              le mercredi avant 13h, chez vous, partout en Occitanie.
            </p>
          </Point>
          <Point>
            <img alt="" src={cadeau}></img>
            <p>
              Toutes les formules s’offrent en carte cadeau, pour vous même ou
              pour quelqu’un de votre tribu.
              <br />
              Vous n’avez qu’à commander et payer la carte et si il s’agit d’un
              cadeau de naissance, les parents concernés n’auront plus qu'à
              remplir sur le site leur choix pour composer leur assortiment le
              moment voulu.
            </p>
          </Point>
        </HowDoesItWorkWrapper>
      </HowDoesItWorkContainer>
    </MotifWrapper>
  );
};
