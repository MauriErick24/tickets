package com.example.tickets.controller;

import com.example.tickets.entity.Ticket;
import com.example.tickets.service.TicketService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@AllArgsConstructor
@RestController
@RequestMapping("/ticket")
public class TicketController {

    private TicketService ticketService;

    @GetMapping("/{id}")
    public ResponseEntity<Ticket> getById(@PathVariable UUID id) {
        Ticket ticket = ticketService.getById(id);
        return ResponseEntity.status(HttpStatus.OK).body(ticket);
    }
}
