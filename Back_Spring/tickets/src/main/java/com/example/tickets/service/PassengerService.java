package com.example.tickets.service;

import com.example.tickets.entity.Passenger;

import java.util.UUID;

public interface PassengerService {
    Passenger getById(UUID id);
}
