import React from "react";

const CompanyCard = ({ companyName, departureRange, priceRange, onClick }) => {
  return (
    <div className="row gap-05em center border-radius-5px box-shadow">
      <div className="column">
        <h2>{companyName}</h2>
        <p>
          Horas: {departureRange} <br />
          Precios: {priceRange}
        </p>
        <button onClick={onClick}>Seleccionar</button>
        <br />
      </div>
    </div>
  );
};

export default CompanyCard;
