import React, { useState } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import { NewNavBar } from "../components/NewNavBar";
import { NewHero } from "../components/NewHero";
import { WhachaWaitingFor } from "../components/WhachaWaitingFor";
import { Curcumarmite } from "../components/Curcumarmite";
import { HowDoesItWork } from "../components/HowDoesItWork";
import { Portrait } from "../components/Portrait";
import { Engagement } from "../components/Engagement";
import { BasePage } from "../components/BasePage";
import { Footer } from "../components/Footer";
import { colorBaie, Heading, maxWidth } from "../styles/theme";

import motif from "../images/motif.png";

const MotifWrapper = styled.div`
  background: url(${motif});
`;

const IndexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  background: white;
  max-width: ${maxWidth};
  margin: 0 auto;
  padding: 4rem 0;
`;

const FormulesWrapper = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 5rem;
  row-gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const Formule = styled(Link)`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  font-family: "Rubik", sans-serif;
  font-size: 1.5rem;

  &:visited {
    color: ${colorBaie};
  }
`;

const NouvelIndexSecretDeOuf = ({ data }) => {
  //filter data without a title
  const filteredData = data.allContentYaml.nodes.filter((item) => item.title);

  //create an array of data where isCadeau is false
  const formules = filteredData.filter((item) => !item.isCadeau);

  //create an array of data where isCadeau is true
  const cadeaux = filteredData.filter((item) => item.isCadeau);

  return (
    <BasePage noindex>
      <NewNavBar />
      <MotifWrapper>
        <IndexWrapper>
          <div>
            <Heading>
              La <em>Curcumarmite</em> Occitane
            </Heading>
            <p>
              La livraison de repas élaborés pour la grossesse et le post partum
              et pour toute la famille. Retrouvez ce service partout en
              Occitanie à s’offrir ou à offrir aux parents de votre tribu. Les
              familles accompagnées par Blandine dans le cadre du métier de
              Doula, peuvent demander à être livrées lors des consultations et
              temps passés ensemble.
            </p>
          </div>

          <div>
            <Heading>
              Les Curcumaccompagnements pendant{" "}
              <em>la grossesse et le post partum.</em>
            </Heading>
            <p>
              Blandine, formée en tant que Doula, vous accompagne tout au long
              de la période que vous souhaitez. Plusieurs types
              d’accompagnements sont possibles (long, moyen, court) et se
              discutent avec les familles pour faire du sur mesure. Ils abordent
              la question du couple, de l’allaitement, de la préparation à la
              naissance et du post partum, du projet de naissance et bien sûr de
              la nutrition pendant toutes ces périodes. Ils peuvent avoir lieu à
              la curcumaison à Toulouse ou chez vous. Dans le cadre de ces
              suivis, Blandine propose également des massages et des
              consultations en naturopathie de la femme enceinte et en post
              partum, sujet sur lequel elle possède une vrai expertise. Blandine
              est là pour vous rassurer, vous permettre de faire des choix
              éclairés et surtout vous faire prendre confiance en vos ressources
              pour créer, aggrandire vos familles.
            </p>
          </div>

          <div>
            <Heading>
              Les <em>massages</em> pré et post natal
            </Heading>
            <p>
              Blandine est formé en massage et soins pré et post natal: -Les
              massage ayurvédiques pour la femme enceinte et en post partum, qui
              sont des massages aux huiles (sans HE), et qui vont détendre en
              profondeur les muscles et tensions fréquements rencontrées pendant
              la grossesse et le PP. Ils aident à préparer le bassin à
              l’enfantement, aident à la sécrétion d’ocytocine, et connecter
              avec votre bébé. -Les soins de resserrage du bassin et aussi
            </p>
          </div>
        </IndexWrapper>
      </MotifWrapper>
      <Footer />
    </BasePage>
  );
};

export default NouvelIndexSecretDeOuf;
