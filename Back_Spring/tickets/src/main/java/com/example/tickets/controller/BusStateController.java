package com.example.tickets.controller;

import com.example.tickets.entity.BusState;
import com.example.tickets.service.BusStateService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@AllArgsConstructor
@RestController
@RequestMapping("/busState")
public class BusStateController {

    private BusStateService busStateService;

    @GetMapping("/{id}")
    public ResponseEntity<BusState> getById(@PathVariable UUID id) {
        BusState busState = busStateService.getById(id);
        return ResponseEntity.status(HttpStatus.OK).body(busState);
    }
}
