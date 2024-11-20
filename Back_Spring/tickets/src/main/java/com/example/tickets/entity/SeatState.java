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
public class SeatState {
    @Id
    @GeneratedValue
    private UUID seatStateId;

    private String state;

//    @OneToMany(mappedBy = "seatState")
//    private Set<Seat> seats;

    // Getters y Setters
}
