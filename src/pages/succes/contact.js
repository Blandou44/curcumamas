import * as React from "react";
import { ThankYou } from "../../components/ThankYou";
import { GlobalStyle } from "../../styles/theme";

const ContactSuccess = () => {
  return (
    <main>
      <GlobalStyle />
      <title>Merci !</title>
      <ThankYou
        heading="Merci pour votre message !"
        message="Nous vous recontacterons très bientôt pour répondre à toutes vos
            questions !"
      />
    </main>
  );
};

export default ContactSuccess;
