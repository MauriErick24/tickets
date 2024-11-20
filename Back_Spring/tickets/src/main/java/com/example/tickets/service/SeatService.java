package com.example.tickets.service;

import com.example.tickets.entity.Seat;
import java.util.UUID;

public interface SeatService {
    Seat getById(UUID id);
}
