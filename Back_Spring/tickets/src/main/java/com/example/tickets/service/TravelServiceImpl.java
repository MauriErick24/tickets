package com.example.tickets.service;

import com.example.tickets.entity.Travel;
import com.example.tickets.repository.TravelRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@AllArgsConstructor
@Service
public class TravelServiceImpl implements TravelService {

    private TravelRepository travelRepository;

    @Override
    public Travel getById(UUID id) {
        return travelRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Travel not found"));
    }
}
