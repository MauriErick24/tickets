package com.example.tickets.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Seat {
    @Id
    @GeneratedValue
    private UUID seatId;

    private int number;

    @ManyToOne
    @JoinColumn(name = "ticket_id", nullable = false)
    private Ticket ticket;

    @ManyToOne
    @JoinColumn(name = "seat_state_id", nullable = false)
    private SeatState seatState;

    // Getters y Setters
}
