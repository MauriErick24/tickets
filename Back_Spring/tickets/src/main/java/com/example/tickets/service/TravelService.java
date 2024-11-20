package com.example.tickets.service;

import com.example.tickets.entity.Travel;
import java.util.UUID;

public interface TravelService {
    Travel getById(UUID id);
}
