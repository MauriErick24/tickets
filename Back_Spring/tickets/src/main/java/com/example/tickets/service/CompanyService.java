package com.example.tickets.service;

import com.example.tickets.entity.Company;

import java.util.List;
import java.util.UUID;

public interface CompanyService {
    Company getById(UUID id);
    List<Company> getAll();
}

