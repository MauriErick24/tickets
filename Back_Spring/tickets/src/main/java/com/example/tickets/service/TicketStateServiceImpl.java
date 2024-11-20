package com.example.tickets.service;

import com.example.tickets.entity.TicketState;
import com.example.tickets.repository.TicketStateRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@AllArgsConstructor
@Service
public class TicketStateServiceImpl implements TicketStateService {

    private TicketStateRepository ticketStateRepository;

    @Override
    public TicketState getById(UUID id) {
        return ticketStateRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Ticket state not found"));
    }
}
