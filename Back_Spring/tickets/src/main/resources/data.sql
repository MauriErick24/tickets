-- Insertar datos en la tabla Passenger
INSERT INTO passenger (passenger_id, name, last_name, date_of_birth, ci, phone_number) VALUES
('b6b12f91-41ed-4f99-99a6-2b3aaf34273f', 'Juan', 'Pérez', '1995-05-15 08:30:00', '12345678', '555-1234'),
('a6b9b8e7-2d67-4119-91d8-3e3befe7b5f3', 'María', 'González', '1989-10-22 15:45:00', '87654321', '555-5678'),
('e9f8d6f2-1348-4d3b-8b5f-482ed92a43fc', 'Carlos', 'López', '2000-03-10 09:15:00', '23456789', '555-9012'),
('c0c1a3f6-1a7a-4f43-98f9-7b80b456e38e', 'Lucía', 'Martínez', '1992-11-30 18:00:00', '34567890', '555-3456'),
('d2e8a9e5-3c52-47e9-81fb-5a1ed3e7d6c9', 'Ricardo', 'Ramírez', '1997-07-25 20:20:00', '45678901', '555-7890');

-- Insertar datos en la tabla Company
INSERT INTO company (company_id, name, nit, phone_number) VALUES
('d796b499-1d78-4697-9d9b-00a0fc43b678', 'Bolivar', '1001001001', '555-1111'),
('b83903c3-09a8-4b22-bdba-4bb24a440acf', 'Trans. Copacabana', '1001001001', '555-1111'),
('6cf6d302-7b85-4f02-ba45-48cb3983b7a2', 'El Dorado', '1001001001', '555-1111'),
('87ce21f9-e876-4da5-86ac-6e65d2384a60', 'Mopar', '1001001001', '555-1111'),
('2d674995-fdc2-48a4-87b2-6cc2402828ef', 'Cosmos', '1001001001', '555-1111'),
('1b2b12f9-4ed4-4599-b6a7-2b3aaf34273f', 'Transporte 1', '1001001001', '555-1111'),
('2c3c23f0-5fe5-4699-c7b8-3c3cbfe8b5f3', 'Transporte 2', '2002002002', '555-2222');

-- Insertar datos en la tabla City
INSERT INTO city (city_id, name) VALUES
('50702bf4-d5ab-4a76-8671-5debb0431b20', 'Ciudad A'),
('53b82a2b-3cf7-4054-b821-5cd05705fcba', 'Ciudad B'),
('7ad53cd4-9411-4134-935f-2a27c0a5c7bd', 'La Paz'),
('352093ca-2ee0-4317-b2c4-33dc76501baa', 'Cochabamba'),
('ab2b7ef8-4ef4-413e-a3cb-9a2aa1d57e69', 'Santa Cruz'),
('019d3125-12a1-4d9a-9d8d-9e2735c886d6', 'Oruro'),
('81b1f857-479d-4536-9a56-98c5140aec09', 'Beni'),
('bceb8af4-c790-43ab-a258-01d14bfd2eea', 'Pando'),
('51394da7-2540-4cf2-a397-d2c4d58f3436', 'Tarija'),
('b83c89ec-ff4d-4828-af90-01dfa3c985d3', 'Potosi'),
('80fe1255-e308-45b0-a2b3-85c3d749d82f', 'Sucre');

-- Insertar datos en la tabla Travel
INSERT INTO travel (travel_id, departure_date, departure_time, passenger_id, from_city_id, to_city_id, company_id) VALUES
('913d3c4f-26f6-46b6-9212-e3237f9f950c', '2024-12-01', '08:30:00', 'b6b12f91-41ed-4f99-99a6-2b3aaf34273f', '50702bf4-d5ab-4a76-8671-5debb0431b20', '53b82a2b-3cf7-4054-b821-5cd05705fcba','1b2b12f9-4ed4-4599-b6a7-2b3aaf34273f'),
('dfb45228-a24f-4c3a-a03d-23598bc2a4de', '2024-12-02', '15:00:00', 'a6b9b8e7-2d67-4119-91d8-3e3befe7b5f3', '53b82a2b-3cf7-4054-b821-5cd05705fcba', '50702bf4-d5ab-4a76-8671-5debb0431b20', '2c3c23f0-5fe5-4699-c7b8-3c3cbfe8b5f3');

-- Insertar datos en la tabla TicketState
INSERT INTO ticket_state (ticket_state_id, state) VALUES
('b84ab2a0-fe48-4890-893d-07da72a03f54', 'Disponible'),
('5e00baee-f2cb-411d-8035-071ad9e77b37', 'Vendido');

-- Insertar datos en la tabla Ticket
INSERT INTO ticket (ticket_id, buy_date, travel_id, ticket_state_id) VALUES
('00d4cb55-0a5a-4757-afbc-340e741fab32', '2024-12-01', '913d3c4f-26f6-46b6-9212-e3237f9f950c', 'b84ab2a0-fe48-4890-893d-07da72a03f54'),
('ee5131c8-b90d-486c-9ab8-d45f92b14ed7', '2024-12-02', 'dfb45228-a24f-4c3a-a03d-23598bc2a4de', '5e00baee-f2cb-411d-8035-071ad9e77b37');

-- Insertar datos en la tabla BusState
INSERT INTO bus_state (bus_state_id, state) VALUES
('6ced1d96-66b3-41f8-8333-58ad55004d06', 'En servicio'),
('7bfdd47c-6e74-4e07-bade-ad6736cb9757', 'Fuera de servicio');

-- Insertar datos en la tabla Bus
INSERT INTO bus (bus_id, number_plate, seats_number, type, bus_state_id, company_id) VALUES
('03e7d4b0-c705-430b-9f06-bf4312ff276c', 'ABC123', 40, 'Autobús', '6ced1d96-66b3-41f8-8333-58ad55004d06', '1b2b12f9-4ed4-4599-b6a7-2b3aaf34273f'),
('4c7eeff8-f629-4b53-803e-788cafd142da', 'DEF456', 30, 'Minibús', '7bfdd47c-6e74-4e07-bade-ad6736cb9757', '2c3c23f0-5fe5-4699-c7b8-3c3cbfe8b5f3');

-- Insertar datos en la tabla SeatState
INSERT INTO seat_state (seat_state_id, state) VALUES
('d8034698-194c-47c9-ae9c-708e15c14df7', 'Disponible'),
('bd6dff3b-590b-4a43-815c-4a8ccb9bbae3', 'Ocupado');

-- Insertar datos en la tabla Seat
INSERT INTO seat (seat_id, number, ticket_id, seat_state_id) VALUES
('2ab0a6da-0a67-42d6-8348-3b37540e98f2', 1, '00d4cb55-0a5a-4757-afbc-340e741fab32', 'd8034698-194c-47c9-ae9c-708e15c14df7'),
('e7855117-970b-465e-9814-b51fbd9fa555', 2, 'ee5131c8-b90d-486c-9ab8-d45f92b14ed7', 'bd6dff3b-590b-4a43-815c-4a8ccb9bbae3');
