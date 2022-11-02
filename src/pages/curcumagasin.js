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
  colorBaie,
  Heading,
  maxWidth,
  newMainColor,
  SmallText,
} from "../styles/theme";

import motif from "../images/motif.png";
import { CommandForm } from "../components/CommandForm";

const MotifWrapper = styled.div`
  background: url(${motif});
`;

const ShopWrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr;
  gap: 3rem;
  background: white;
  max-width: ${maxWidth};
  margin: 0 auto;
  padding: 4rem 0;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Rubik", sans-serif;
`;

const Price = styled.h2`
  font-family: "Rubik Mono One", sans-serif;
  color: transparent;
  -webkit-text-stroke: 1px ${newMainColor};
  text-stroke: 1px ${newMainColor};
  font-style: normal;
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const curcumagasin = () => {
  // get the item from the query parameter
  const urlParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );
  const item = urlParams.get("item") ?? "fringale";

  const itemMap = {
    fringale: {
      title: "Fringale",
      description:
        "Cette formule contient deux curcumenus composés chacuns d'une entrée, plat et dessert. Parfait starter pack pour vous libérer les jours juste après l'enfantement sans négliger votre alimentation",
      isCadeau: false,
      nbRepas: 2,
      price: {
        vg: "54€",
        flexi: "57€",
      },
      image:
        "https://images.unsplash.com/photo-1581090002029-8b2b2b2b2b2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0YWxvZyUyMHBhZ2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    },
    curcufamille: {
      title: "La Curcufamille",
      description: "Pour les petits creux",
      isCadeau: false,
      nbRepas: 6,
      price: {
        vg: "150€",
        flexi: "??€",
      },
      image:
        "https://images.unsplash.com/photo-1581090002029-8b2b2b2b2b2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0YWxvZyUyMHBhZ2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    },
    curcutribu: {
      title: "Curcutribu",
      description: "Pour les petits creux",
      isCadeau: true,
      nbRepas: 10,
      price: {
        vg: "250€",
        flexi: "??€",
      },
      image:
        "https://images.unsplash.com/photo-1581090002029-8b2b2b2b2b2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0YWxvZyUyMHBhZ2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    },
    curcuvillage: {
      title: "CurcuVillage",
      description: "Pour les petits creux",
      isCadeau: true,
      nbRepas: 14,
      price: {
        vg: "??€",
        flexi: "??€",
      },
      image:
        "https://images.unsplash.com/photo-1581090002029-8b2b2b2b2b2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0YWxvZyUyMHBhZ2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    },
    curcumoisdor: {
      title: "CurcuMoisD'or",
      description: "Pour les petits creux",
      isCadeau: true,
      nbRepas: 2,
      price: {
        vg: "54€",
        flexi: "57€",
      },
      image:
        "https://images.unsplash.com/photo-1581090002029-8b2b2b2b2b2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0YWxvZyUyMHBhZ2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    },
  };

  const selectedItem = itemMap[item] ?? itemMap.fringale;

  const { title, description, price, image, nbRepas, isCadeau } = selectedItem;

  return (
    <BasePage noindex>
      <NewNavBar />
      <MotifWrapper>
        <ShopWrapper>
          <StaticImage
            src="https://www.liseantunessimoes.com/wp-content/uploads/2020/02/Blog_135_bis-500x330.jpg"
            layout="constrained"
            width={700}
          />
          <FormWrapper>
            <Heading>{title}</Heading>
            <Price>
              {price.vg} VG - {price.flexi} Flexi
            </Price>
            <SmallText center>Taxes incluses, livraison non incluse.</SmallText>
            <p>{description}</p>
            <CommandForm defaultCadeau={isCadeau} nbRepas={nbRepas} />
          </FormWrapper>
        </ShopWrapper>
      </MotifWrapper>
      <Footer />
    </BasePage>
  );
};

export default curcumagasin;
