import React from "react";
import styled from "styled-components";
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
  margin-bottom: 1rem;
  display: grid;
  row-gap: 2rem;
  justify-items: center;

  @media (max-width: ${smallBreakpoint}) {
    padding: 2rem 1rem 1rem;
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

  &:hover {
    color: white;
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
          Insta
        </FooterLink>
      </LinksContainer>
      <PartnersContainer>
        <FooterText>Partenaires</FooterText>
        <CityContainer>
          <FooterText>Toulouse :</FooterText>
          <FooterLink href="http://aad-accouchement-domicile.fr/">
            AAD
          </FooterLink>
        </CityContainer>
        <CityContainer>
          <FooterText>Paris :</FooterText>
          <FooterLink href="https://www.oponopono-paris.com/">
            Oponopono-Paris
          </FooterLink>
          <FooterLink href="https://www.chefcecile.com/">
            Chef Cécile
          </FooterLink>
        </CityContainer>
        <CityContainer>
          <FooterText>Lyon :</FooterText>
          <FooterLink href="https://www.mama-lova.fr/">Mama-lova</FooterLink>
        </CityContainer>
        <CityContainer>
          <FooterText>Bordeaux :</FooterText>
          <FooterLink href="https://www.instagram.com/bepviet_bdx/?hl=fr">
            @bepviet_bdx
          </FooterLink>
        </CityContainer>
      </PartnersContainer>
      <ContactContainer>
        <FooterText>
          Contact:{" "}
          <FooterLink href="mailto:curcumamas@gmail.com">
            curcumamas@gmail.com
          </FooterLink>
        </FooterText>
      </ContactContainer>
      <Copyright>
        Crédit photo : rose citron <br /> © Copyright{" "}
        <strong>Curcumamas</strong>. All Rights Reserved
      </Copyright>
    </FooterContainer>
  );
};
