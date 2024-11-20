package com.example.tickets.service;

import com.example.tickets.entity.Bus;
import com.example.tickets.repository.BusRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@Service
public class BusServiceImpl implements BusService {

    private BusRepository busRepository;

    @Override
    public Bus getById(UUID id) {
        return busRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Bus not found"));
    }

    @Override
    public List<Bus> getAll() {
        return busRepository.findAll();
    }
}
