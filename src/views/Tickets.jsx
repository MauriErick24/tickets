import "../styles/styles.css";

const Tickets = () => {
  return (
    <div className="containter">
      <h2>Trans Copacabana</h2>
      <br />
      <b>Horarios disponibles - 16/9/2024</b>
      <div className="card-list">
        <div className="hour-card">
          <p>Salida: 8:00 - Llegada 17:00</p>
          <table className="price-table">
            <thead>
              <tr>
                <th>Bus semi-cama</th>
                <th>Bus cama</th>
                <th>Bus especial</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>80 bs</td>
                <td>100 bs</td>
                <td>140 bs</td>
              </tr>
              <tr>
                <td>
                  <button className="select-hour-btn">Selccionar</button>
                </td>
                <td>
                  <button className="select-hour-btn">Selccionar</button>
                </td>
                <td>
                  <button className="select-hour-btn">Selccionar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="hour-card">
          <p>Salida: 21:00 - Llegada 6:00</p>
          <table className="price-table">
            <thead>
              <tr>
                <th>Bus semi-cama</th>
                <th>Bus cama</th>
                <th>Bus especial</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>140 bs</td>
              </tr>
              <tr>
                <td>
                  <button className="select-btn" disabled>
                    Selccionar
                  </button>
                </td>
                <td>
                  <button className="select-btn" disabled>
                    Selccionar
                  </button>
                </td>
                <td>
                  <button className="select-hour-btn">Selccionar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
