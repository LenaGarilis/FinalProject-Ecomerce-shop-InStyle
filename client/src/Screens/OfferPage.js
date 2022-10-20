import React from "react";
import OfferOrderSteps from "../components/OfferPage/OfferOrderSteps";
import OfferPageDescription from "../components/OfferPage/OfferPageDescription";

const OfferPage = () => {
  return (
    <div>
      <OfferPageDescription />
      <OfferOrderSteps />
    </div>
  );
};

export default OfferPage;
