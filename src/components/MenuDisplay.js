import React from "react";

import {
  mainColor,
  maxWidth,
  newMainColor,
  applySidePadding,
  NewButton,
  Argument,
  Heading,
  MotifWrapper,
  smallBreakpoint,
} from "../styles/theme";

export const MenuDisplay = ({ data }) => {
  return (
    <MotifWrapper>
      {[1, 2, 3, 4].map((item, index) => (
        <>
          <img src={data[`image${item}`]}></img>
          <Heading>{data[`nom${item}`]}</Heading>
          <small>{data[`infoNut${item}`]}</small>
          <p>{data[`description${item}`]}</p>
        </>
      ))}
    </MotifWrapper>
  );
};
