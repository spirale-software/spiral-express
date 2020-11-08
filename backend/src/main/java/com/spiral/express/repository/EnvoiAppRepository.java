package com.spiral.express.repository;

import com.spiral.express.domain.Envoi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EnvoiAppRepository extends JpaRepository<Envoi, Long> {

    Optional<Envoi> findByReference(String reference);
}
