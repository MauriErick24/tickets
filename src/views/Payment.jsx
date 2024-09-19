import React, { useState } from 'react';
import '../styles/styles2.css';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="payment-container">
      <h1>Compra tus pasajes</h1>
      <div className="ticket-info">
        <p><strong>Asientos:</strong> 7, 8</p>
        <p><strong>Precio / U:</strong> 80 bs</p>
        <p><strong>Precio total:</strong> 160 bs</p>
      </div>

      <h2>Nombre de ocupantes:</h2>
      <div className="passenger-info">
        <div className="passenger">
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
          <input type="text" placeholder="CI" />
        </div>
        <div className="passenger">
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
          <input type="text" placeholder="CI" />
        </div>
      </div>

      <h2>Información de pago:</h2>
      <div className="payment-options">
        <label>
          <input type="radio" name="payment" value="qr" onChange={handlePaymentChange} />
          QR
        </label>
        <label>
          <input type="radio" name="payment" value="transferencia" onChange={handlePaymentChange} />
          Transferencia
        </label>
        <label>
          <input type="radio" name="payment" value="tigo" onChange={handlePaymentChange} />
          Tigo Money
        </label>
      </div>

      <div className="payment-details">
        {paymentMethod === 'qr' && (
          <div className="payment-info">
            <p><strong>Código QR para pagar:</strong></p>
            <img src="/path-to-qr-image.png" alt="QR Code" />
          </div>
        )}
        {paymentMethod === 'transferencia' && (
          <div className="payment-info">
            <p><strong>Datos de transferencia bancaria:</strong></p>
            <p>Banco: XYZ</p>
            <p>Cuenta: 123456789</p>
            <p>Titular: Nombre del Titular</p>
          </div>
        )}
        {paymentMethod === 'tigo' && (
          <div className="payment-info">
            <p><strong>Datos para Tigo Money:</strong></p>
            <p>Número de Tigo: 123456789</p>
            <p>Nombre del receptor: Nombre Apellido</p>
          </div>
        )}
      </div>

      <button className="next-button">Siguiente</button>
    </div>
  );
};

export default Payment;
