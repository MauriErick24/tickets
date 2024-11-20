import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import CompanyCard from "../components/CompanyCard";
import { getCompanies } from "../api/Companies";
const CompanyList = () => {
  const [companiesList, setCompaniesList] = useState([]);

  useEffect(() => {
    getAllCompanies();
  }, []);

  const getAllCompanies = async () => {
    try {
      const companiesList = await getCompanies();
      // console.log("🚀 ~ getAllCompanies ~ companiesList:", companiesList);
      setCompaniesList(companiesList);
    } catch (error) {}
  };

  const onClick = (companyId) => {
    console.log("🚀 ~ onClick ~ companyId:", companyId);
  };

  return (
    <div>
      <Header>
        <h2>BOLETOS ONLINE</h2>
      </Header>
      <Content className="left pd-05em column">
        <h3>Selecciona una compañia de buses </h3>
        <div className="w-100">
          {companiesList.map((company, index) => (
            <div key={index}>
              <CompanyCard
                companyName={company.name}
                departureRange={"8:00 - 23:00"}
                priceRange={"80 bs - 120 bs"}
                onClick={() => onClick(company.companyId)}
              />
              <br />
            </div>
          ))}
        </div>
      </Content>
    </div>
  );
};

export default CompanyList;
