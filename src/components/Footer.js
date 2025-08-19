import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImage } from "gatsby-plugin-image";

import { Link } from "gatsby";
import {
  mainColor,
  secondaryColor,
  applySidePadding,
  smallBreakpoint,
} from "../styles/theme";

const FooterContainer = styled.footer`
  background: ${mainColor};
  ${applySidePadding("3rem")};
  display: grid;
  row-gap: 2rem;
  justify-items: center;

  @media (max-width: ${smallBreakpoint}) {
    padding: 2rem 1rem 1rem;
  }

  .image-wrapper {
    height: 100px;
    filter: drop-shadow(10px 10px 7px #00000060);

    img {
      height: 100px;
    }
  }
`;

const FooterText = styled.p`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
`;

const FooterLink = styled.a`
  color: ${secondaryColor};
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;

  > svg {
    height: 1.5rem;
    > path {
      fill: ${secondaryColor};
    }
  }

  &:hover {
    color: white;

    > svg {
      > path {
        fill: white;
      }
    }
  }
`;

const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
`;

const PartnersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  margin: 0 auto;

  > p:first-child {
    grid-column: span 4;
    text-align: center;
  }
  @media (max-width: ${smallBreakpoint}) {
    grid-template-columns: 1fr;

    > p:first-child {
      grid-column: span 1;
    }
  }
`;

const CityContainer = styled.div`
  display: grid;
  align-self: flex-start;
  text-align: center;
`;

const ContactContainer = styled.div``;

const Copyright = styled.p`
  color: white;
  text-align: center;
`;

export const Footer = ({ isCGU = false }) => {
  return (
    <FooterContainer>
      <LinksContainer>
        {isCGU ? (
          <FooterLink as={Link} to="/">
            Accueil
          </FooterLink>
        ) : (
          <FooterLink as={Link} to="/cgu">
            CGU
          </FooterLink>
        )}
        <FooterLink href="https://www.instagram.com/curcumamas/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <title>Instagram</title>
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </FooterLink>
      </LinksContainer>
      <ContactContainer>
        <FooterText>
          Contact:{" "}
          <FooterLink href="mailto:curcumamas@gmail.com">
            curcumamas@gmail.com
          </FooterLink>
        </FooterText>
        <FooterText>
          Téléphone:{" "}
          <FooterLink href="tel:0689300865">06.89.30.08.65</FooterLink>
        </FooterText>
      </ContactContainer>
      <Link to="/credit-impots" className="image-wrapper">
        <StaticImage
          src={"../images/service-a-la-personne.png"}
          alt="Service à la personne"
        />
      </Link>
      <Copyright>
        Crédit photo : rose citron <br /> © Copyright{" "}
        <strong>Curcumamas</strong>. All Rights Reserved
      </Copyright>
    </FooterContainer>
  );
};
