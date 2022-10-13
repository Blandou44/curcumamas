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

const WhachaWaitingForContainer = styled.nav`
  padding: 1.5rem ${sidePadding};
  max-width: ${maxWidth};
  margin: 0 auto;
`;

const WhachaWaitingForWrapper = styled.nav`
  padding: 1rem;
  border: 1px solid ${mainColor};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
`;

export const WhachaWaitingFor = () => {
  return (
    <WhachaWaitingForContainer>
      <WhachaWaitingForWrapper>
        <Heading>
          Qu'attendez-vous pour prendre soin de vous et votre tribu ?
        </Heading>
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
        <Argument>
          <img src="https://placekitten.com/100/100"></img>
          <p>Lorem ipsum dolor sit amet</p>
        </Argument>
      </WhachaWaitingForWrapper>
    </WhachaWaitingForContainer>
  );
};
