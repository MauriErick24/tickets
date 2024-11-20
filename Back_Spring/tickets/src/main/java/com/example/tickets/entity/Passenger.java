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
public class Passenger {
    @Id
    @GeneratedValue
    private UUID passengerId;

    private String name;
    private String lastName;
    private String dateOfBirth;
    private String ci;
    private String phoneNumber;

//    @OneToMany(mappedBy = "passenger")
//    private Set<Travel> travels;
}
