package com.example.tickets.repository;

import com.example.tickets.entity.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface BusRepository extends JpaRepository<Bus, UUID> {

}
