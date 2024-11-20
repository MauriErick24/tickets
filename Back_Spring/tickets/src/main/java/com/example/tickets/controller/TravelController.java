package com.example.tickets.controller;

import com.example.tickets.entity.Travel;
import com.example.tickets.service.TravelService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@AllArgsConstructor
@RestController
@RequestMapping("/travel")
public class TravelController {

    private TravelService travelService;

    @GetMapping("/{id}")
    public ResponseEntity<Travel> getById(@PathVariable UUID id) {
        Travel travel = travelService.getById(id);
        return ResponseEntity.status(HttpStatus.OK).body(travel);
    }
}
