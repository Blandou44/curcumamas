import React from "react";
import styled from "styled-components";
import { mainColor, secondaryColor } from "../styles/theme";

const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => (props.isHidden ? 0 : "1rem")};

  > p {
    color: ${(props) => (props.isDark ? secondaryColor : "white")};
    font-size: 1.2rem;
  }
`;

const RadioGroupWrapper = styled.div`
  display: flex;
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
  max-height: ${(props) => (props.isHidden ? "0px" : "300px")};
  transition: all 0.4s;
  overflow-y: hidden;

  > p {
    color: ${(props) => (props.isDark ? secondaryColor : "white")};
    width: 100%;
  }
`;

const RadioWrapper = styled.div`
  border: 1px solid white;
  border-color: ${(props) => (props.isDark ? secondaryColor : "white")};
  display: flex;
  margin-left: -1px;
  position: relative;

  background-color: ${(props) =>
    props.isSelected ? mainColor : "transparent"};

  transition: all 0.4s;

  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    margin-left: 0;
  }
  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  > label {
    user-select: none;
    padding: 1rem;
    cursor: pointer;
    color: ${(props) => (props.isDark ? secondaryColor : "white")};
  }

  > input {
    opacity: 0;
    position: absolute;
    left: 50%;
    bottom: 1px;
  }
`;

export const RadioGroup = ({
  label,
  name,
  options,
  onChange,
  selectedValue,
  isHidden = false,
  isRequired = false,
  isDark = false,
}) => {
  return (
    <RadioGroupContainer isHidden={isHidden} isDark={isDark}>
      {label ? <p>{label} :</p> : null}
      <RadioGroupWrapper isHidden={isHidden} isDark={isDark}>
        {options.map((option, index) => {
          return (
            <RadioWrapper
              key={index}
              isSelected={selectedValue === option.value}
              name={name}
              isDark={isDark}
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                id={option.value}
                onChange={onChange}
                required={isRequired}
                checked={selectedValue === option.value}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </RadioWrapper>
          );
        })}
      </RadioGroupWrapper>
    </RadioGroupContainer>
  );
};
