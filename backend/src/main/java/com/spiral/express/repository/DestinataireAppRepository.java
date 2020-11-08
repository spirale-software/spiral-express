package com.spiral.express.repository;

import com.spiral.express.domain.Destinataire;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DestinataireAppRepository extends JpaRepository<Destinataire, Long> {
    List<Destinataire> findAllByClientId(Long clientId);
}
