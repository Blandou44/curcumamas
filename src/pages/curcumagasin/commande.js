import React, { useState } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import { NewNavBar } from "../../components/NewNavBar";
import { NewHero } from "../../components/NewHero";
import { WhachaWaitingFor } from "../../components/WhachaWaitingFor";
import { Curcumarmite } from "../../components/Curcumarmite";
import { HowDoesItWork } from "../../components/HowDoesItWork";
import { Portrait } from "../../components/Portrait";
import { Engagement } from "../../components/Engagement";
import { BasePage } from "../../components/BasePage";
import { Footer } from "../../components/Footer";

import {
  colorBaie,
  Heading,
  maxWidth,
  newMainColor,
  SmallText,
} from "../../styles/theme";

import motif from "../../images/motif.png";
import { CommandForm } from "../../components/CommandForm";

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

  > img {
    width: 700px;
    position: sticky;
    top: 0;
  }
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

const curcumagasin = ({ data }) => {
  const menuArray = data.allContentYaml.nodes.filter((item) => item.menuType);

  // turn the array into an object using menuType as key

  const menuObject = menuArray.reduce((acc, item) => {
    acc[item.menuType] = item;
    return acc;
  }, {});

  console.log(menuObject);

  //filter data without a title
  const filteredData = data.allContentYaml.nodes.filter((item) => item.title);

  // turn filteredData into an object using title as a key
  const formulesObject = filteredData.reduce((acc, item) => {
    acc[encodeURIComponent(item.title.toLowerCase())] = item;
    return acc;
  }, {});

  // get the item from the query parameter
  const urlParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );
  const item = urlParams.get("item") ?? filteredData[0].title;

  const selectedItem = formulesObject[encodeURIComponent(item.toLowerCase())];

  const { title, description, priceVG, priceFlexi, image, nbRepas, isCadeau } =
    selectedItem;

  return (
    <BasePage noindex>
      <NewNavBar />
      <MotifWrapper>
        <ShopWrapper>
          <img src={image} />
          <FormWrapper>
            <Heading>{title}</Heading>
            <Price>
              {priceVG}€ VG - {priceFlexi}€ Flexi
            </Price>
            <SmallText center>Taxes incluses, livraison non incluse.</SmallText>
            <p>{description}</p>
            <CommandForm
              defaultCadeau={isCadeau}
              nbRepas={nbRepas}
              menuObject={menuObject}
            />
          </FormWrapper>
        </ShopWrapper>
      </MotifWrapper>
      <Footer />
    </BasePage>
  );
};

export const query = graphql`
  query FormulesQuery {
    allContentYaml {
      nodes {
        title
        priceVG
        priceFlexi
        nbRepas
        image
        isCadeau
        menuType
        nom1
        nom2
        nom3
        nom4
        infoNut1
        infoNut3
        infoNut2
        infoNut4
        description1
        description2
        description3
        description4
        image1
        image2
        image3
        image4
      }
    }
  }
`;

export default curcumagasin;
