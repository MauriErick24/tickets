import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { getAllCities } from "../api/City";

const InfoForm = () => {
  const navigate = useNavigate();
  const [citiesList, setCitiesList] = useState([]);

  useEffect(() => {
    loadCities();
  }, []);

  const loadCities = async () => {
    const cities = await getAllCities();
    // console.log("🚀 ~ loadCities ~ cities:", cities);

    setCitiesList(cities);
  };

  const onSubmit = () => {
    navigate("/companies");
  };

  return (
    <div>
      <Header>
        <h2>BOLETOS ONLINE</h2>
      </Header>
      <Content className="pd-05em">
        <h3>Llena con la informacion del viaje</h3>
        <form className="column" onSubmit={onSubmit}>
          <label htmlFor="passenger-quantity">Cantidad de personas : </label>
          <input
            type="number"
            id="passenger-quantity"
            name="passenger-quantity"
            min={1}
            required
          />
          <label htmlFor="from">Ciudad origen : </label>
          <select id="from" name="from">
            <option value={0}>--seleccione una opcion--</option>
            {citiesList.map((city, index) => (
              <option key={index} value={city.cityId}>
                {city.name}
              </option>
            ))}
          </select>

          <label htmlFor="to">Ciudad destino : </label>
          <select id="to" name="to">
            <option value={0}>--seleccione una opcion--</option>
            {citiesList.map((city, index) => (
              <option key={index} value={city.cityId}>
                {city.name}
              </option>
            ))}
          </select>

          <label htmlFor="date">Fecha de salida :</label>
          <input type="date" id="date" name="date" />
          <br />
          <button type="submit">Buscar</button>
        </form>
      </Content>
      <Footer />
    </div>
  );
};

export default InfoForm;
