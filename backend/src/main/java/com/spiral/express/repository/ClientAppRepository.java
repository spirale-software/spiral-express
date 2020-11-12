package com.spiral.express.repository;

import com.spiral.express.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientAppRepository extends JpaRepository<Client, Long>, JpaSpecificationExecutor {
}
