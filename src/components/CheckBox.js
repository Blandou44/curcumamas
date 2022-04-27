import React from "react";
import styled from "styled-components";
import { mainColor } from "../styles/theme";

const CheckBoxWrapper = styled.div`
  display: flex;
  border-radius: 5px;

  > label {
    user-select: none;
    padding: 1rem;
    padding-left: 0;
    cursor: pointer;
    color: white;
    display: flex;

    &::before {
      content: "";
      width: 1rem;
      height: 1rem;
      background-color: transparent;
      border: 1px solid white;
      border-radius: 2px;
      align-self: center;
      margin-right: 1rem;
      background-color: ${(props) =>
        props.isChecked ? mainColor : "transparent"};
      transition: all 0.4s;
    }
  }

  > input {
    opacity: 0;
    position: absolute;
    width: 0;
    height: 0;
  }
`;

export const CheckBox = ({ label, name, onChange, value }) => {
  return (
    <CheckBoxWrapper isChecked={value}>
      <input type="checkbox" name={name} id={name} onChange={onChange} />
      <label htmlFor={name}>{label}</label>
    </CheckBoxWrapper>
  );
};
