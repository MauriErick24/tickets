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
public class BusState {
    @Id
    @GeneratedValue
    private UUID busStateId;

    private String state;

//    @OneToMany(mappedBy = "busState")
//    private Set<Bus> buses;

    // Getters y Setters
}
