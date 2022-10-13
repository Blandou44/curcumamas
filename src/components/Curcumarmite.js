import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import { StaticImage } from "gatsby-plugin-image";
import Headroom from "react-headroom";
import {
  mainColor,
  maxWidth,
  secondaryColor,
  sidePadding,
  NewButton,
} from "../styles/theme";

const CurcumarmiteWrapper = styled.nav`
  padding: 1.5rem ${sidePadding};
  max-width: ${maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &::after {
    content: url(https://placekitten.com/200/300);
    height: 0;
    position: relative;
    left: 1rem;
    transform: rotate(50deg);
  }
`;

const Heading = styled.h1`
  grid-column: span 4;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${secondaryColor};
  margin: 0;
  text-align: center;
`;

const CarouselContainer = styled.div`
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
          infiniteLoop={true}
        >
          <div>
            <StaticImage
              src="https://placekitten.com/1920/1080"
              alt=""
              imgStyle={{ objectFit: "contain" }}
            />
          </div>
          <div>
            <StaticImage
              src="https://placekitten.com/1920/1081"
              alt=""
              imgStyle={{ objectFit: "contain" }}
            />
          </div>
          <div>
            <StaticImage
              src="https://placekitten.com/1920/1087"
              alt=""
              imgStyle={{ objectFit: "contain" }}
            />
          </div>
          <div>
            <StaticImage
              src="https://placekitten.com/1923/1083"
              alt=""
              imgStyle={{ objectFit: "contain" }}
            />
          </div>
          <div>
            <StaticImage
              src="https://placekitten.com/1920/1084"
              alt=""
              imgStyle={{ objectFit: "contain" }}
            />
          </div>
          <div>
            <StaticImage
              src="https://placekitten.com/1920/1085"
              alt=""
              imgStyle={{ objectFit: "contain" }}
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
