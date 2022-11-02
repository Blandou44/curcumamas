import React from "react";
import styled from "styled-components";
import { mainColor, newMainColor } from "../styles/theme";

const NumberInputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  align-items: center;
`;

const IncrementButton = styled.button`
  font-family: "Rubik Mono One", sans-serif;
  color: ${newMainColor};
  background: transparent;
  border-radius: 50%;
  border: 1px solid ${newMainColor};
  height: 1.5rem;
  width: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: default;
    filter: grayscale(1);
  }
`;

const Value = styled.span`
  font-family: "Rubik Mono One", sans-serif;
  color: ${newMainColor};
`;

export const NumberInput = ({ value, setValue, remaining }) => {
  const handleMinusClick = () => {
    setValue(Math.max(0, value - 1));
  };
  const handlePlusClick = () => {
    if (remaining > 0) {
      setValue(value + 1);
    }
  };

  return (
    <NumberInputWrapper>
      <IncrementButton
        disabled={value <= 0}
        onClick={handleMinusClick}
        type="button"
      >
        -
      </IncrementButton>
      <Value>{value}</Value>
      <IncrementButton
        disabled={remaining <= 0}
        onClick={handlePlusClick}
        type="button"
      >
        +
      </IncrementButton>
    </NumberInputWrapper>
  );
};
