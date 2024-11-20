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
public class Company {
    @Id
    @GeneratedValue
    private UUID companyId;

    private String name;
    private String nit;
    private String phoneNumber;

//    @OneToMany(mappedBy = "company")
//    private Set<Travel> travels;
//
//    @OneToMany(mappedBy = "company")
//    private Set<Bus> buses;

    // Getters y Setters
}

