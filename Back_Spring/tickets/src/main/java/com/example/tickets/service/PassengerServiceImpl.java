package com.example.tickets.service;

import com.example.tickets.entity.Passenger;
import com.example.tickets.repository.PassengerRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@AllArgsConstructor
@Service
public class PassengerServiceImpl implements PassengerService {

    private PassengerRepository passengerRepository;

    @Override
    public Passenger getById(UUID id) {
        return passengerRepository.findById(id).orElseThrow(()-> new EntityNotFoundException("Passenger not found"));
    }
}
