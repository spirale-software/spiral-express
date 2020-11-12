package com.spiral.express.service;

import com.spiral.express.dto.ClientDTO;
import org.springframework.data.domain.Page;

public interface ClientAppService {

    ClientDTO sauver(ClientDTO clientDTO);

    ClientDTO modifier(ClientDTO clientDTO);

    ClientDTO findById(Long id);

    Page<ClientDTO> findAll();

    void deleteById(Long clientId);
}
