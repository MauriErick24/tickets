package com.example.tickets.controller;

import com.example.tickets.entity.Company;
import com.example.tickets.service.CompanyService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@RestController
@RequestMapping("/company")
public class CompanyController {

    private CompanyService companyService;

    @GetMapping("/{id}")
    public ResponseEntity<Company> getById(@PathVariable UUID id) {
        Company company = companyService.getById(id);
        return ResponseEntity.status(HttpStatus.OK).body(company);
    }

    @GetMapping()
    public ResponseEntity<List<Company>> getAllCompanies() {
        List<Company> companyList = companyService.getAll();
        return ResponseEntity.status(HttpStatus.OK).body(companyList);
    }
}
