package com.example.tickets.service;

import com.example.tickets.entity.Ticket;
import java.util.UUID;

public interface TicketService {
    Ticket getById(UUID id);
}
