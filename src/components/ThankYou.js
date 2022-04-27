import * as React from "react";
import styled from "styled-components";
import { mainColor, secondaryColor, Button } from "../styles/theme";

const ThankYouContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${mainColor};
`;

const ThankYouWrapper = styled.div`
  display: grid;
  row-gap: 2rem;
  background: ${secondaryColor};
  border-radius: 67% 33% 66% 34% / 30% 27% 73% 70%;
  height: 60%;
  width: 60%;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;

  > p {
    color: ${mainColor};
    font-size: 1.5rem;
    justify-self: center;
    width: 70%;
  }

  > a {
    justify-self: center;
  }
`;

const Header = styled.h1`
  font-family: "Permanent Marker", cursive;
  margin: 0 0 20px 0;
  text-align: center;
  font-weight: 500;
  padding: 0;
  color: ${mainColor};
  font-size: 40px;
`;

// markup
export const ThankYou = ({ heading, message }) => {
  return (
    <ThankYouContainer>
      <ThankYouWrapper>
        <Header>{heading}</Header>
        <p>{message}</p>
        <Button to="/">Accueil</Button>
      </ThankYouWrapper>
    </ThankYouContainer>
  );
};
