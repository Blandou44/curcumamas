import * as React from "react";
import styled from "styled-components";
import { Header } from "../pages";

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
  return (
    <MenusWrapper>
      <Header>Menu du {menuNode.date}</Header>
      <img src={menuNode.menu} alt="" />
    </MenusWrapper>
  );
};
