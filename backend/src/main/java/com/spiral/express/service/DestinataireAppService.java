package com.spiral.express.service;

import com.spiral.express.dto.DestinataireDTO;
import org.springframework.data.domain.Page;

import java.util.List;

public interface DestinataireAppService {

    DestinataireDTO sauver(DestinataireDTO clientDTO);

    DestinataireDTO modifier(DestinataireDTO clientDTO);

    DestinataireDTO findById(Long id);

    Page<DestinataireDTO> findAll();

    List<DestinataireDTO> findAllByClientId(Long clientId);
}
