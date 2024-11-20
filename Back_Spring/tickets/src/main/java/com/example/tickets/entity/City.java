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
public class City {
    @Id
    @GeneratedValue
    private UUID cityId;

    private String name;

//    @OneToMany(mappedBy = "city")
//    private Set<Travel> travels;

    // Getters y Setters
}
