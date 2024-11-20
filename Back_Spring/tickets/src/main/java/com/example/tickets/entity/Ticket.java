package com.example.tickets.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;
import java.util.UUID;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Ticket {
    @Id
    @GeneratedValue
    private UUID ticketId;

    private String buyDate;

    @ManyToOne
    @JoinColumn(name = "travel_id", nullable = false)
    private Travel travel;

    @ManyToOne
    @JoinColumn(name = "ticket_state_id", nullable = false)
    private TicketState ticketState;

//    @OneToMany(mappedBy = "ticket")
//    private Set<Seat> seats;

    // Getters y Setters
}
