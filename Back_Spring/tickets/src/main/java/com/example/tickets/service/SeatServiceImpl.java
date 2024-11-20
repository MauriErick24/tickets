package com.example.tickets.service;

import com.example.tickets.entity.Seat;
import com.example.tickets.repository.SeatRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@AllArgsConstructor
@Service
public class SeatServiceImpl implements SeatService {

    private SeatRepository seatRepository;

    @Override
    public Seat getById(UUID id) {
        return seatRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Seat not found"));
    }
}

