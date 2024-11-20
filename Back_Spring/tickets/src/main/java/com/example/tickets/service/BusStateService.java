package com.example.tickets.service;

import com.example.tickets.entity.BusState;
import java.util.UUID;

public interface BusStateService {
    BusState getById(UUID id);

}
