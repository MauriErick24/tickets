package com.example.tickets.service;

import com.example.tickets.entity.BusState;
import com.example.tickets.repository.BusStateRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@AllArgsConstructor
@Service
public class BusStateServiceImpl implements BusStateService {

    private BusStateRepository busStateRepository;

    @Override
    public BusState getById(UUID id) {
        return busStateRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Bus state not found"));
    }
}

