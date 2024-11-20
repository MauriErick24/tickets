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
public class Travel {
    @Id
    @GeneratedValue
    private UUID travelId;

    private String departureDate;
    private String departureTime;

    @ManyToOne
    @JoinColumn(name = "passenger_id", nullable = false)
    private Passenger passenger;

    @ManyToOne
    @JoinColumn(name = "from_city_id", nullable = false)
    private City fromCity;

    @ManyToOne
    @JoinColumn(name = "to_city_id", nullable = false)
    private City toCity;

    @ManyToOne
    @JoinColumn(name = "company_id", nullable = false)
    private Company company;

//    @OneToMany(mappedBy = "travel")
//    private Set<Ticket> tickets;

}
