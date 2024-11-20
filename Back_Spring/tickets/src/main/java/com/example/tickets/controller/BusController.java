package com.example.tickets.controller;

import com.example.tickets.entity.Bus;
import com.example.tickets.service.BusService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@RestController
@RequestMapping("/bus")
public class BusController {

    private BusService busService;

    @GetMapping("/{id}")
    public ResponseEntity<Bus> getById(@PathVariable UUID id) {
        Bus bus = busService.getById(id);
        return ResponseEntity.status(HttpStatus.OK).body(bus);
    }

    @GetMapping()
    public ResponseEntity<List<Bus>> getAllBuses() {
        List<Bus> busesList = busService.getAll();
        return ResponseEntity.status(HttpStatus.OK).body(busesList);
    }

}
