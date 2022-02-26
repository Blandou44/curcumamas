import * as React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import { StaticImage } from "gatsby-plugin-image";

const MenusWrapper = styled.div`
  display: grid;
  row-gap: 1rem;
  justify-items: center;
`;

export const Carousel = () => {
  const legend = (
    <>
      <b>UNE CUISINE RONDE, SIMPLE ET ENGAGÉE </b> <br />
      Offres - vous du temps en famille grâce à une cuisine saine et
      réconfortante livrée chez vous, qui vous libère l'esprit et accompagne les
      besoins nutritionnels de la mère.
    </>
  );
  return (
    <MenusWrapper>
      <ReactCarousel
        emulateTouch={true}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
      >
        <div>
          <StaticImage
            src="../images/carousel/1.jpg"
            alt=""
            imgStyle={{ objectFit: "contain" }}
          />
          <p className="legend">{legend}</p>
        </div>
        <div>
          <StaticImage
            src="../images/carousel/2.jpg"
            alt=""
            imgStyle={{ objectFit: "contain" }}
          />
          <p className="legend">{legend}</p>
        </div>
        <div>
          <StaticImage
            src="../images/carousel/3.jpg"
            alt=""
            imgStyle={{ objectFit: "contain" }}
          />
          <p className="legend">{legend}</p>
        </div>
        <div>
          <StaticImage
            src="../images/carousel/4.jpg"
            alt=""
            imgStyle={{ objectFit: "contain" }}
          />
          <p className="legend">{legend}</p>
        </div>
        <div>
          <StaticImage
            src="../images/carousel/5.jpg"
            alt=""
            imgStyle={{ objectFit: "contain" }}
          />
          <p className="legend">{legend}</p>
        </div>
        <div>
          <StaticImage
            src="../images/carousel/6.jpg"
            alt=""
            imgStyle={{ objectFit: "contain" }}
          />
          <p className="legend">{legend}</p>
        </div>
      </ReactCarousel>
    </MenusWrapper>
  );
};
