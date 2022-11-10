import React from "react";
import styled from "styled-components";
import legumes from "../images/illustrations/legumes_bleu.png";
import genoux from "../images/illustrations/genoux_bleu.png";
import graines from "../images/illustrations/graines_bleu.png";
import bocal from "../images/illustrations/bocal_bleu.png";
import nibs from "../images/illustrations/nibs_bleu.png";

import {
  mainColor,
  maxWidth,
  secondaryColor,
  sidePadding,
  NewButton,
  Argument,
  Heading,
  MotifWrapper,
  applySidePadding,
  smallBreakpoint,
} from "../styles/theme";

const EngagementContainer = styled.nav`
  ${applySidePadding("5rem")}
  max-width: ${maxWidth};
  margin: 0 auto;
`;

const EngagementWrapper = styled.div`
  ${applySidePadding("3rem")}
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 0px 0px 15px 4px #00000033;
  background: white;

  @media (min-width: ${smallBreakpoint}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    column-gap: 4rem;
  }
`;

const CTA = styled(NewButton)`
  grid-column: 4 / 6;
  justify-self: flex-end;
`;

const EngagementItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > img {
    max-width: 100px;
    height: 100px;
    object-fit: contain;
  }

  > p {
    font-family: "Rubik", sans-serif;
    font-size: 1.4rem;
    text-align: justify;
  }
`;

export const Engagement = () => {
  return (
    <MotifWrapper>
      <EngagementContainer>
        <EngagementWrapper>
          <Heading>
            L'engagement <em>nutritionnel</em>
          </Heading>
          <EngagementItem>
            <img src={legumes}></img>
            <p>
              Chez Curcumamas tout est 100% bio et de saison, en majorité local
              (excepté épices, oléagineux etc)
            </p>
          </EngagementItem>
          <EngagementItem>
            <img src={genoux}></img>
            <p>
              Grâce à l’expertise de Blandine les menus sont élaborés pour
              répondre aux besoins nutritionnels particuliers de la jeune mère,
              convenant à toute la famille.
            </p>
          </EngagementItem>
          <EngagementItem>
            <img src={graines}></img>
            <p>
              Chez curcumamas on utilse des supers aliments qui permettent
              d’avoir tous les nutriments nécessaires à votre récupération et
              votre moral (algues, cacao cru, huile crue, épices...)
            </p>
          </EngagementItem>
          <EngagementItem>
            <img src={bocal}></img>
            <p>
              Chez Curcumamas les cuissons sont douces pour préserver les
              nutriments et les vitamines, utilisation de sucrants naturels, on
              évite le lactose pour les aplv et le gluten.
            </p>
          </EngagementItem>
          <EngagementItem>
            <img src={nibs}></img>
            <p>
              Chez Curcumamas on utilise des aliments qui soutiennent
              l’allaitement et on évite le gluten et le lactose pour des mamans
              et des bébés qui digèrent mieux.
            </p>
          </EngagementItem>
          <CTA to="/nos-services">Commandez</CTA>
        </EngagementWrapper>
      </EngagementContainer>
    </MotifWrapper>
  );
};
