package com.example.tickets.controller;

import com.example.tickets.entity.TicketState;
import com.example.tickets.service.TicketStateService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@AllArgsConstructor
@RestController
@RequestMapping("/ticketState")
public class TicketStateController {

    private TicketStateService ticketStateService;

    @GetMapping("/{id}")
    public ResponseEntity<TicketState> getById(@PathVariable UUID id) {
        TicketState ticketState = ticketStateService.getById(id);
        return ResponseEntity.status(HttpStatus.OK).body(ticketState);
    }
}
