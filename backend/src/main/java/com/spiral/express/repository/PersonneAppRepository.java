package com.spiral.express.repository;

import com.spiral.express.domain.Personne;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonneAppRepository extends JpaRepository<Personne, Long> {
}
