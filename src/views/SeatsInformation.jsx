import "../styles/styles2.css";

const Payment = () => {
  return (
    <div className="payment-container">
      <h1>Compra tus pasajes</h1>
      <div className="ticket-info">
        <p>
          <strong>Asientos:</strong> 7, 8
        </p>
        <p>
          <strong>Precio / U:</strong> 80 bs
        </p>
        <p>
          <strong>Precio total:</strong> 160 bs
        </p>
      </div>

      <h2>Nombre de ocupantes:</h2>

      <form>
        <div className="passenger-info">
          <div className="passenger">
            <label htmlFor="name">Nombre:</label>
            <input type="text" placeholder="Nombre" id="name" required />
            <label htmlFor="lname">Apellido:</label>
            <input type="text" placeholder="Apellido" id="lname" required />
            <label htmlFor="ci">CI:</label>
            <input type="text" placeholder="CI" id="ci" required />
            <label htmlFor="dob">Fecha de nacimiento:</label>
            <input type="date" id="dob" required />
            <label htmlFor="email">Correo electronico:</label>
            <input
              type="email"
              placeholder="correo electronico"
              id="email"
              required
            />
          </div>
          <div className="passenger">
            <label htmlFor="name">Nombre:</label>
            <input type="text" placeholder="Nombre" id="name" required />
            <label htmlFor="lname">Apellido:</label>
            <input type="text" placeholder="Apellido" id="lname" required />
            <label htmlFor="ci">CI:</label>
            <input type="text" placeholder="CI" id="ci" required />
            <label htmlFor="dob">Fecha de nacimiento:</label>
            <input type="date" id="dob" required />
            <label htmlFor="email">Correo electronico:</label>
            <input
              type="email"
              placeholder="correo electronico"
              id="email"
              required
            />
          </div>
        </div>
        <div>
          <button className="next-button" type="submit">
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
