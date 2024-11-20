CREATE TABLE Passenger (
    Passenger_ID SERIAL PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    LastName VARCHAR(100) NOT NULL,
    DateOfBorn DATE NOT NULL,
    CI VARCHAR(20) NOT NULL UNIQUE,
    PhoneNumber VARCHAR(20)
);

CREATE TABLE Company (
    Company_ID SERIAL PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    NIT VARCHAR(50) NOT NULL UNIQUE,
    PhoneNumber VARCHAR(20)
);

CREATE TABLE City (
    City_ID SERIAL PRIMARY KEY,
    Name VARCHAR(100) NOT NULL
);

CREATE TABLE Travel (
    Travel_ID SERIAL PRIMARY KEY,
    DepartureDate DATE NOT NULL,
    DepartureTime TIME NOT NULL,
    Passenger_ID INT REFERENCES Passenger(Passenger_ID),
    City_ID INT REFERENCES City(City_ID),
    Company_ID INT REFERENCES Company(Company_ID)
);

CREATE TABLE TicketState (
    TicketState_ID SERIAL PRIMARY KEY,
    State VARCHAR(50) NOT NULL,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Ticket (
    Ticket_ID SERIAL PRIMARY KEY,
    Date DATE NOT NULL,
    Travel_ID INT REFERENCES Travel(Travel_ID),
    TicketState_ID INT REFERENCES TicketState(TicketState_ID),
    CONSTRAINT unique_ticket_per_travel UNIQUE (Travel_ID, TicketState_ID)
);

CREATE TABLE BusState (
    BusState_ID SERIAL PRIMARY KEY,
    State VARCHAR(50) NOT NULL,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Bus (
    Bus_ID SERIAL PRIMARY KEY,
    NumberPlate VARCHAR(20) NOT NULL UNIQUE,
    SeatsNumber INT NOT NULL,
    BusState_ID INT REFERENCES BusState(BusState_ID),
    Type VARCHAR(50),
    Company_ID INT REFERENCES Company(Company_ID)
);

CREATE TABLE SeatState (
    SeatState_ID SERIAL PRIMARY KEY,
    State VARCHAR(50) NOT NULL,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Seat (
    Seat_ID SERIAL PRIMARY KEY,
    Number INT NOT NULL,
    Ticket_ID INT REFERENCES Ticket(Ticket_ID),
    SeatState_ID INT REFERENCES SeatState(SeatState_ID),
    CONSTRAINT unique_seat_per_ticket UNIQUE (Number, Ticket_ID)
);

-- Indexes for improving query performance
CREATE INDEX idx_travel_passenger ON Travel (Passenger_ID);
CREATE INDEX idx_travel_city ON Travel (City_ID);
CREATE INDEX idx_travel_company ON Travel (Company_ID);
CREATE INDEX idx_ticket_travel ON Ticket (Travel_ID);
CREATE INDEX idx_bus_company ON Bus (Company_ID);

---------------------------------------------------- DATOS DE PRUEBA -----------------------------------

-- Insertar estados para TicketState
INSERT INTO TicketState (State, UpdatedAt) VALUES 
('Pagado', '2024-10-31 12:00:00'),
('Pendiente', '2024-10-31 12:05:00'),
('Cancelado', '2024-10-31 12:10:00');

-- Insertar estados para BusState
INSERT INTO BusState (State, UpdatedAt) VALUES 
('En Servicio', '2024-10-31 12:00:00'),
('En Mantenimiento', '2024-10-31 12:10:00'),
('No Disponible', '2024-10-31 12:15:00');

-- Insertar estados para SeatState
INSERT INTO SeatState (State, UpdatedAt) VALUES 
('Disponible', '2024-10-31 12:00:00'),
('Reservado', '2024-10-31 12:10:00'),
('Bloqueado', '2024-10-31 12:20:00');

-- Insertar datos para Passenger
INSERT INTO Passenger (Name, LastName, DateOfBorn, CI, PhoneNumber) VALUES
('Juan', 'Perez', '1990-05-15', '12345678', '789123456'),
('Maria', 'Gomez', '1985-08-20', '87654321', '987654321');

-- Insertar datos para Company
INSERT INTO Company (Name, NIT, PhoneNumber) VALUES
('TransBolivia', '100200300', '12345678'),
('Viajes Express', '200300400', '87654321');

-- Insertar datos para City
INSERT INTO City (Name) VALUES
('La Paz'), ('Santa Cruz'), ('Cochabamba');

-- Insertar datos para Travel
INSERT INTO Travel (DepartureDate, DepartureTime, Passenger_ID, City_ID, Company_ID) VALUES
('2024-11-10', '08:00', 1, 1, 1),
('2024-11-15', '09:30', 2, 2, 2);

-- Insertar datos para Bus
INSERT INTO Bus (NumberPlate, SeatsNumber, BusState_ID, Type, Company_ID) VALUES
('ABC123', 45, 1, 'Semi-Cama', 1),
('XYZ789', 30, 2, 'Normal', 2);

-- Insertar datos para Ticket
INSERT INTO Ticket (Date, Travel_ID, TicketState_ID) VALUES
('2024-11-05', 1, 1),
('2024-11-05', 2, 2);

-- Insertar datos para Seat
INSERT INTO Seat (Number, Ticket_ID, SeatState_ID) VALUES
(1, 1, 1),
(2, 2, 2);
