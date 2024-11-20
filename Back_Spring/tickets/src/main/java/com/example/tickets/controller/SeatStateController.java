package com.example.tickets.controller;

import com.example.tickets.entity.SeatState;
import com.example.tickets.service.SeatStateService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@AllArgsConstructor
@RestController
@RequestMapping("/seatState")
public class SeatStateController {

    private SeatStateService seatStateService;

    @GetMapping("/{id}")
    public ResponseEntity<SeatState> getById(@PathVariable UUID id) {
        SeatState seatState = seatStateService.getById(id);
        return ResponseEntity.status(HttpStatus.OK).body(seatState);
    }
}
