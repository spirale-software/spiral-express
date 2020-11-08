package com.spiral.express.repository;

import com.spiral.express.domain.Partenaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PartenaireAppRepository extends JpaRepository<Partenaire, Long> {
}
