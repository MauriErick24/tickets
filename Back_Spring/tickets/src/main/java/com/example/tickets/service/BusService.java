package com.example.tickets.service;

import com.example.tickets.entity.Bus;

import java.util.List;
import java.util.UUID;

public interface BusService {
    Bus getById(UUID id);
    List<Bus> getAll();
}
