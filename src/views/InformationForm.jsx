import { useState } from "react";
import "../styles/styles.css";

const InformationForm = () => {
  const [showReturn, setShowReturn] = useState(true);

  const travelChange = (value) => {
    if (value == 1) {
      setShowReturn(false);
    } else {
      setShowReturn(true);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Informacion del viaje</h2>
        <form>
          <div className="form-col">
            <label>Origen</label>
            <select>
              <option value={-1}>--selecciona--</option>
              <option value="La Paz">La Paz</option>
              <option value="Cochabamba">Cochabamba</option>
              <option value="Santa Cruz">Santa Cruz</option>
            </select>
            <label>Destino</label>
            <select>
              <option value={-1}>--selecciona--</option>
              <option value="La Paz">La Paz</option>
              <option value="Cochabamba">Cochabamba</option>
              <option value="Santa Cruz">Santa Cruz</option>
            </select>
          </div>

          <div className="form-col">
            <div>
              <input
                onChange={(e) => travelChange(e.target.value)}
                id="ida"
                type="radio"
                value="1"
                name="travel"
              />
              <label htmlFor="ida">Solo ida</label>
            </div>
            <div>
              <input
                onChange={(e) => travelChange(e.target.value)}
                id="ida-vuelta"
                type="radio"
                value="2"
                name="travel"
              />
              <label htmlFor="ida-vuelta">Ida y vuelta</label>
            </div>
          </div>

          <div className="form-col">
            <label>Salida</label>
            <input type="date" />

            {showReturn && (
              <>
                <label>Regreso</label>
                <input type="date" />
              </>
            )}
          </div>
          <div>
            <label htmlFor="quantity">Cantidad de personas:</label>
            <input type="number" id="quantity" min="1" max="40" required />
          </div>
          <input type="submit" value="Buscar" />
        </form>
      </div>
    </div>
  );
};

export default InformationForm;
