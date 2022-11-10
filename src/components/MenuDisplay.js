import React from "react";
import styled from "styled-components";

import {
  mainColor,
  maxWidth,
  newMainColor,
  applySidePadding,
  NewButton,
  smallBreakpoint,
  Heading,
  MotifWrapper,
  SmallText,
} from "../styles/theme";

const MenuOuterContainer = styled.div`
  ${applySidePadding("1rem")};
`;

const HeadingWrapper = styled.div`
  width: 100%;
  background: white;
  padding: 1rem 0;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  max-width: 500px;
  justify-self: center;

  box-shadow: 0px 0px 15px 4px #00000033;

  > img {
    height: 200px;
  }

  @media (min-width: ${smallBreakpoint}) {
    justify-self: flex-start;

    &:nth-child(odd) {
      justify-self: flex-end;
    }
  }
`;

const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 4rem 0;
  gap: 3rem;

  @media (min-width: ${smallBreakpoint}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ChoixHeader = styled.p`
  font-family: "Rubik Mono One", sans-serif;
  margin: 0;
`;

export const MenuDisplay = ({ data, heading }) => {
  return (
    <MotifWrapper>
      <HeadingWrapper>
        <Heading>
          <em>{heading}</em>
        </Heading>
      </HeadingWrapper>
      <MenuOuterContainer>
        <MenuContainer>
          {[1, 2, 3, 4].map((item, index) => (
            <MenuWrapper>
              <img src={data[`image${item}`]}></img>
              <ChoixHeader>{data[`nom${item}`]}</ChoixHeader>
              <SmallText>{data[`infoNut${item}`]}</SmallText>
              <p>{data[`description${item}`]}</p>
            </MenuWrapper>
          ))}
        </MenuContainer>
      </MenuOuterContainer>
    </MotifWrapper>
  );
};
