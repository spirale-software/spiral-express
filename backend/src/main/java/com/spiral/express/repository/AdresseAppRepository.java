package com.spiral.express.repository;

import com.spiral.express.domain.Adresse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdresseAppRepository extends JpaRepository<Adresse, Long> {
}
