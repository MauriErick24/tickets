package com.example.tickets.service;

import com.example.tickets.entity.SeatState;
import com.example.tickets.repository.SeatStateRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@AllArgsConstructor
@Service
public class SeatStateServiceImpl implements SeatStateService {

    private SeatStateRepository seatStateRepository;

    @Override
    public SeatState getById(UUID id) {
        return seatStateRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Seat state not found"));
    }
}
