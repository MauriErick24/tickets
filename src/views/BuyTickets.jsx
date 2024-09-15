import "../styles/styles.css";

import ImgCop from "../assets/images/logocop.png";
import ImgDorado from "../assets/images/dorado.png";
import ImgBolivar from "../assets/images/bolivar.jpg";

const BuyTickets = () => {
  return (
    <div className="container">
      <h1>Compra tus pasajes</h1>
      <div>
        <h3>Cochabamba - Sucre</h3>
        <div className="company-list">
          <div className="company-card">
            <div className="img-card">
              <img src={ImgCop} />
            </div>
            <div className="info">
              <h3>Trans Copacabana</h3>
              <div className="details">
                <div>
                  <p>Horarios:</p>
                  <p>5:00 - 23:00</p>
                </div>
                <div>
                  <p>Precios:</p>
                  <p>60 Bs - 150 Bs.</p>
                </div>
                <button>Mas informacion</button>
              </div>
            </div>
          </div>

          <div className="company-card">
            <div className="img-card">
              <img src={ImgDorado} />
            </div>
            <div className="info">
              <h3>El Dorado</h3>
              <div className="details">
                <div>
                  <p>Horarios:</p>
                  <p>5:00 - 23:00</p>
                </div>
                <div>
                  <p>Precios:</p>
                  <p>60 Bs - 150 Bs.</p>
                </div>
                <button>Mas informacion</button>
              </div>
            </div>
          </div>

          <div className="company-card">
            <div className="img-card">
              <img src={ImgBolivar} />
            </div>
            <div className="info">
              <h3>Bolivar</h3>
              <div className="details">
                <div>
                  <p>Horarios:</p>
                  <p>5:00 - 23:00</p>
                </div>
                <div>
                  <p>Precios:</p>
                  <p>60 Bs - 150 Bs.</p>
                </div>
                <button>Mas informacion</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyTickets;
