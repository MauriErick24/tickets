package com.example.tickets.service;

import com.example.tickets.entity.SeatState;
import java.util.UUID;

public interface SeatStateService {
    SeatState getById(UUID id);
}
