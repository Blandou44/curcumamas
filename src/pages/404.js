import * as React from "react";
import { Link } from "gatsby";
import { BasePage } from "../components/BasePage";
import { Heading, MotifWrapper } from "../styles/theme";
import styled from "styled-components";
import { NewNavBar } from "../components/NewNavBar";

const NotFoundWrapper = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 4rem;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0px 0px 15px 4px #00000033;
`;

// markup
const NotFoundPage = () => {
  return (
    <BasePage noindex>
      <MotifWrapper
        style={{ height: "100vh", display: "flex", alignItems: "center" }}
      >
        <NotFoundWrapper>
          <Heading>Curcuperdu.e ?</Heading>
          <p>Cette page n'existe pas !</p>
          <Link to="/">Retour à l'accueil</Link>
        </NotFoundWrapper>
      </MotifWrapper>
    </BasePage>
  );
};

export default NotFoundPage;
