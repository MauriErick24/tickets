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
public class Bus {
    @Id
    @GeneratedValue
    private UUID busId;

    private String numberPlate;
    private int seatsNumber;
    private String type;

    @ManyToOne
    @JoinColumn(name = "bus_state_id", nullable = false)
    private BusState busState;

    @ManyToOne
    @JoinColumn(name = "company_id", nullable = false)
    private Company company;

    // Getters y Setters
}
