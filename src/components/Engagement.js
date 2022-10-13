import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";
import Headroom from "react-headroom";
import {
  mainColor,
  maxWidth,
  secondaryColor,
  sidePadding,
  NewButton,
  Argument,
  Heading,
} from "../styles/theme";

const EngagementContainer = styled.nav`
  padding: 1.5rem ${sidePadding};
  max-width: ${maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
`;

const CTA = styled(NewButton)`
  grid-column: 3 / 5;
  justify-self: flex-end;
`;

export const Engagement = () => {
  return (
    <EngagementContainer>
      <Heading>L'engagement nutritionnel</Heading>
      <Argument>
        <img src="https://placekitten.com/100/100"></img>
        <p>Tout est 100% bio et 80% local</p>
      </Argument>
      <Argument>
        <img src="https://placekitten.com/100/100"></img>
        <p>Lorem ipsum dolor sit amet</p>
      </Argument>
      <Argument>
        <img src="https://placekitten.com/100/100"></img>
        <p>Lorem ipsum dolor sit amet</p>
      </Argument>
      <Argument>
        <img src="https://placekitten.com/100/100"></img>
        <p>Lorem ipsum dolor sit amet</p>
      </Argument>
      <CTA to="/curcumagasin">Commandez</CTA>
    </EngagementContainer>
  );
};
