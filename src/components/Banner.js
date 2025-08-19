import React from "react";
import "./banner.css";
import { Link } from "gatsby";

export const Banner = () => {
  return (
    <div className="banner">
      <p>
        50 % DE CRÉDIT D'IMPÔT SUR LES PRESTATIONS DE PRÉPARATION DE REPAS À
        DOMICILE. <Link to="/credit-impots">En savoir plus</Link>.
      </p>
    </div>
  );
};
