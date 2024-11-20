//import './App.css'

import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const onClickComprar = () => {
    navigate("/info-form");
  };

  return (
    <>
      <Header>
        <h1>BOLETOS ONLINE</h1>
        <h3>Compra tus boletos de bus en cualquier momento</h3>
        <button onClick={onClickComprar}> Comprar ahora</button>
        <br />
      </Header>
      <Content className={"center"}>
        <h2>Salidas diarias</h2>
      </Content>
      <Footer />
    </>
  );
}

export default Home;
