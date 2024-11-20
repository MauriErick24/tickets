package com.example.tickets.service;

import com.example.tickets.entity.City;
import com.example.tickets.repository.CityRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@Service
public class CityServiceImpl implements CityService {

    private CityRepository cityRepository;

    @Override
    public City getById(UUID id) {
        return cityRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("City not found"));
    }

    @Override
    public List<City> getAll() {
        return cityRepository.findAll();
    }
}
