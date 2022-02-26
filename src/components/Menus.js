import * as React from "react";
import styled from "styled-components";
import { RadioGroup } from "./RadioGroup";
import { StaticImage } from "gatsby-plugin-image";

const MenusWrapper = styled.div`
  display: grid;
  row-gap: 1rem;
  justify-items: center;
`;

export const Menus = () => {
  const [menu, setMenu] = React.useState("1");

  const handleMenuChange = (e) => {
    setMenu(e.target.value);
  };

  return (
    <MenusWrapper>
      <RadioGroup
        name="date"
        options={[
          { value: "1", label: "Livraison du 8 mars" },
          { value: "2", label: "Livraison du 15 mars" },
        ]}
        onChange={handleMenuChange}
        selectedValue={menu}
        isDark
      />
      {menu === "1" ? (
        <StaticImage
          src="../images/menus/menu1.png"
          alt=""
          imgStyle={{ objectFit: "contain" }}
        />
      ) : (
        <StaticImage
          src="../images/menus/menu2.png"
          alt=""
          imgStyle={{ objectFit: "contain" }}
        />
      )}
    </MenusWrapper>
  );
};
