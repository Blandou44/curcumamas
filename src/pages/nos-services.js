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
import {
  applySidePadding,
  colorBaie,
  Heading,
  maxWidth,
} from "../styles/theme";

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

const ServiceWrapper = styled.div`
  ${applySidePadding("1rem")}
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  > div {
    flex-shrink: 1;
  }

  > .gatsby-image-wrapper {
    width: 300px;
    flex-shrink: 0;
    height: fit-content;
    border-radius: 50%;
  }

  p,
  h1 {
    text-align: left;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    p,
    h1 {
      text-align: right;
    }
  }
`;

const NouvelIndexSecretDeOuf = () => {
  return (
    <BasePage noindex>
      <NewNavBar />
      <MotifWrapper>
        <IndexWrapper>
          <ServiceWrapper>
            <StaticImage
              src="../images/nos-services/curcumarmite 1.jpg"
              objectFit="contain"
            />
            <div>
              <Heading>
                La <em>Curcumarmite</em> Occitane
              </Heading>
              <p>
                La livraison de repas élaborés pour la grossesse et le post
                partum et pour toute la famille. Retrouvez ce service partout en
                Occitanie à s’offrir ou à offrir aux parents de votre tribu.
              </p>
              <p>
                Les familles accompagnées par Blandine dans le cadre du métier
                de Doula, peuvent demander à être livrées lors des consultations
                et temps passés ensemble.
              </p>
            </div>
          </ServiceWrapper>

          <ServiceWrapper>
            <StaticImage
              src="../images/nos-services/accompagnement grossesse pp.jpg"
              objectFit="contain"
            />
            <div>
              <Heading>
                Les Curcumaccompagnements pendant{" "}
                <em>la grossesse et le post partum.</em>
              </Heading>
              <p>
                Blandine, formée en tant que Doula, vous accompagne tout au long
                de la période que vous souhaitez.
              </p>
              <p>
                Plusieurs types d’accompagnements sont possibles (long, moyen,
                court) et se discutent avec les familles pour faire du sur
                mesure. Ils abordent la question du couple, de l’allaitement, de
                la préparation à la naissance et du post partum, du projet de
                naissance et bien sûr de la nutrition pendant toutes ces
                périodes.
              </p>
              <p>
                Ils peuvent avoir lieu à la curcumaison à Toulouse ou chez vous.
                Dans le cadre de ces suivis, Blandine propose également des
                <b>massages</b> et des <b>consultations</b> en naturopathie de
                la femme enceinte et en post partum, sujet sur lequel elle
                possède une vrai expertise.
              </p>
              <p>
                Blandine est là pour vous rassurer, vous permettre de faire des
                choix éclairés et surtout vous faire prendre confiance en vos
                ressources pour créer, aggrandire vos familles.
              </p>
              <p>ces accompagnement s’offrent en cadeau de naissance</p>
            </div>
          </ServiceWrapper>

          <ServiceWrapper>
            <StaticImage
              src="../images/nos-services/massage.jpg"
              objectFit="contain"
            />
            <div>
              <Heading>
                Les <em>Curcumassages</em> pré et post natal
              </Heading>
              <p>Blandine est formée en massage et soins pré et post natal:</p>
              <p>
                - Les massage ayurvédiques pour la femme enceinte et en post
                partum, qui sont des massages aux huiles (sans HE), et qui vont
                détendre en profondeur les muscles et tensions fréquements
                rencontrées pendant la grossesse et le PP. Ils aident à préparer
                le bassin à l’enfantement, aident à la sécrétion d’ocytocine, et
                connecter avec votre bébé.
              </p>
              <p>
                - Les soins de resserrage du bassin. Ce sont des soins pour
                aider la rétroversion de votre utérus et vos organes à se
                replacer doucement, à se sentir contenue et enveloppée. C’est
                aussi un rite de passage, de fermeture après le grand voyage de
                la grossesse et l’enfantement. Il peut donc prendre deux formes
                : un soin plus “rapide” ou une cérémonie pour célébrer vos
                relevailles, votre naissance en tant que parent. Nous en
                discutons ensemble pour trouver ce qui est le plus adapaté.
              </p>
              <p>
                Ces soins et massages s’offrent en cadeau de naissance, et sont
                proposés également hors des accompagnements.
              </p>
            </div>
          </ServiceWrapper>
          <ServiceWrapper>
            <StaticImage
              src="../images/nos-services/consultations nutrition.jpg"
              objectFit="contain"
            />
            <div>
              <Heading>
                Les curcuconsultations <em>nutrition et naturopathie</em>
              </Heading>
              <p>
                Elles ont pour but d’aborder au mieux les périodes de la
                grossesse et du post partum en observant votre hygiène de vie,
                votre alimentation et vous donnant tous les remèdes et aides
                naturelles qui peuvent vous aider.
              </p>
              <p>
                Cela est pour vous si vous souhaitez: un accompagnement en
                nutrition pour et accompagner au changement alimentaire des
                conseils sur une alimentation adaptée à chaque trimestre de la
                grossesse et pendant le post partum des conseils et des
                techniques naturelles pour limiter les maux de grossesse et du
                post partum. Ils peuvent avoir lieu à la curcumaison à Toulouse
                ou chez vous ou en visio.
              </p>
              <p>
                Ces soins et massages s’offrent en cadeau de naissance, et sont
                proposés également hors des accompagnements.
              </p>
            </div>
          </ServiceWrapper>
        </IndexWrapper>
      </MotifWrapper>
      <Footer />
    </BasePage>
  );
};

export default NouvelIndexSecretDeOuf;
