package com.example.tickets.controller;

import com.example.tickets.entity.City;
import com.example.tickets.service.CityService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@RestController
@RequestMapping("/city")
public class CityController {

    private CityService cityService;

    @GetMapping("/{id}")
    public ResponseEntity<City> getById(@PathVariable UUID id) {
        City city = cityService.getById(id);
        return ResponseEntity.status(HttpStatus.OK).body(city);
    }

    @GetMapping()
    public ResponseEntity<List<City>> getAll(){
        List<City> allCities = cityService.getAll();
        return ResponseEntity.status(HttpStatus.OK).body(allCities);
    }
}
