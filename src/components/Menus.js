import * as React from "react";
import styled from "styled-components";
import { RadioGroup } from "./RadioGroup";
import { StaticImage } from "gatsby-plugin-image";

const MenusWrapper = styled.div`
  display: grid;
  row-gap: 1rem;
  justify-items: center;

  > .gatsby-image-wrapper {
    max-height: 100vh;
  }
`;

export const Menus = ({ datesLivraison }) => {
  const [menu, setMenu] = React.useState("1");

  const handleMenuChange = (e) => {
    setMenu(e.target.value);
  };

  return (
    <MenusWrapper>
      <RadioGroup
        name="date"
        options={[
          { value: "1", label: `Menu du  ${datesLivraison["1"]}` },
          { value: "2", label: `Menu du  ${datesLivraison["2"]}` },
        ]}
        onChange={handleMenuChange}
        selectedValue={menu}
        isDark
      />
      {menu === "1" ? (
        <StaticImage
          src="../images/menus/menu1.png"
          alt=""
          imgStyle={{ objectFit: "contain", maxHeight: "100vh" }}
        />
      ) : (
        <StaticImage
          src="../images/menus/menu2.png"
          alt=""
          imgStyle={{ objectFit: "contain", maxHeight: "100vh" }}
        />
      )}
    </MenusWrapper>
  );
};
