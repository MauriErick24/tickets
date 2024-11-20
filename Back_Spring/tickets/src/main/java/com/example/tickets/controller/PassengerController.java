package com.example.tickets.controller;

import com.example.tickets.entity.Passenger;
import com.example.tickets.service.PassengerService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@AllArgsConstructor
@RestController
@RequestMapping("/passenger")
public class PassengerController {
    private PassengerService passengerService;

    @GetMapping("/{id}")
    public ResponseEntity<Passenger> getById(@PathVariable UUID id){
        Passenger passenger = passengerService.getById(id);
        return ResponseEntity.status(HttpStatus.OK).body(passenger);
    }

}
