package com.example.tickets.service;

import com.example.tickets.entity.Ticket;
import com.example.tickets.repository.TicketRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@AllArgsConstructor
@Service
public class TicketServiceImpl implements TicketService {

    private TicketRepository ticketRepository;

    @Override
    public Ticket getById(UUID id) {
        return ticketRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Ticket not found"));
    }
}
