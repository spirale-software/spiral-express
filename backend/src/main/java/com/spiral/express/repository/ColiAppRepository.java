package com.spiral.express.repository;

import com.spiral.express.domain.Coli;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ColiAppRepository extends JpaRepository<Coli, Long> {
}
