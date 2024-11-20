package com.example.tickets.service;

import com.example.tickets.entity.City;

import java.util.List;
import java.util.UUID;

public interface CityService {
    City getById(UUID id);
    List<City> getAll();
}
