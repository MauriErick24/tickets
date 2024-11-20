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
public class TicketState {
    @Id
    @GeneratedValue
    private UUID ticketStateId;

    private String state;

//    @OneToMany(mappedBy = "ticketState")
//    private Set<Ticket> tickets;

    // Getters y Setters
}
