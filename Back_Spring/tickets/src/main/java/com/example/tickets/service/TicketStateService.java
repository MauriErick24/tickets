package com.example.tickets.service;

import com.example.tickets.entity.TicketState;
import java.util.UUID;

public interface TicketStateService {
    TicketState getById(UUID id);
}
