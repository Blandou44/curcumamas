import * as React from "react";
import styled from "styled-components";
import { RadioGroup } from "./RadioGroup";

const MenusWrapper = styled.div`
  display: grid;
  row-gap: 1rem;
  justify-items: center;

  > img {
    max-height: 100vh;
    object-fit: contain;
  }
`;

export const Menus = ({ menuNode }) => {
  const [menu, setMenu] = React.useState("1");

  const handleMenuChange = (e) => {
    setMenu(e.target.value);
  };

  return (
    <MenusWrapper>
      <RadioGroup
        name="date"
        options={[
          { value: "1", label: `Menu du  ${menuNode.date_1}` },
          { value: "2", label: `Menu du  ${menuNode.date_2}` },
        ]}
        onChange={handleMenuChange}
        selectedValue={menu}
        isDark
      />
      {menu === "1" ? (
        <img src={menuNode.menu_1} alt="" />
      ) : (
        <img src={menuNode.menu_2} alt="" />
      )}
    </MenusWrapper>
  );
};
