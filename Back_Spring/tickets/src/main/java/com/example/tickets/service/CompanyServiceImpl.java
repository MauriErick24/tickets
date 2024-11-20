package com.example.tickets.service;

import com.example.tickets.entity.Company;
import com.example.tickets.repository.CompanyRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@Service
public class CompanyServiceImpl implements CompanyService {

    private CompanyRepository companyRepository;

    @Override
    public Company getById(UUID id) {
        return companyRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Company not found"));
    }

    @Override
    public List<Company> getAll() {
        return companyRepository.findAll();
    }
}
