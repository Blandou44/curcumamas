import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import { StaticImage } from "gatsby-plugin-image";

import background from "../images/illustrations/grains1.png";
import {
  mainColor,
  maxWidth,
  secondaryColor,
  sidePadding,
  NewButton,
  Heading,
} from "../styles/theme";

const CurcumarmiteWrapper = styled.nav`
  padding: 1.5rem ${sidePadding};
  max-width: ${maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;

  &::before {
    content: url(${background});
    position: absolute;
    top: -20px;
    left: 980px;
    transform: scale(0.7);
  }
`;

const CarouselContainer = styled.div`
  margin-top: 2rem;

  .carousel {
    height: 650px;
  }

  > ${NewButton} {
    position: relative;
    top: -5rem;
    z-index: 1;
    left: calc(100% - 13.5rem);
  }
`;

export const Curcumarmite = () => {
  return (
    <CurcumarmiteWrapper>
      <Heading>La Curcumarmite</Heading>
      <CarouselContainer>
        <ReactCarousel
          emulateTouch={true}
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={8000}
          infiniteLoop={true}
        >
          <div>
            <StaticImage
              src={"../images/carousel/21.jpg"}
              alt=""
              imgStyle={{ objectFit: "contain", height: "650px" }}
            />
          </div>
          <div>
            <StaticImage
              src={"../images/carousel/22.jpg"}
              alt=""
              imgStyle={{ objectFit: "contain", height: "650px" }}
            />
          </div>
          <div>
            <StaticImage
              src={"../images/carousel/23.jpg"}
              alt=""
              imgStyle={{ objectFit: "contain", height: "650px" }}
            />
          </div>
          <div>
            <StaticImage
              src={"../images/carousel/24.jpg"}
              alt=""
              imgStyle={{ objectFit: "contain", height: "650px" }}
            />
          </div>
        </ReactCarousel>
        <NewButton to="curcumagasin" secondary>
          Commandez
        </NewButton>
      </CarouselContainer>
    </CurcumarmiteWrapper>
  );
};
