package com.example.tickets.controller;

import com.example.tickets.entity.Seat;
import com.example.tickets.service.SeatService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@AllArgsConstructor
@RestController
@RequestMapping("/seat")
public class SeatController {

    private SeatService seatService;

    @GetMapping("/{id}")
    public ResponseEntity<Seat> getById(@PathVariable UUID id) {
        Seat seat = seatService.getById(id);
        return ResponseEntity.status(HttpStatus.OK).body(seat);
    }
}
