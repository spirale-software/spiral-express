package com.spiral.express.service;


import com.spiral.express.dto.PartenaireDTO;
import org.springframework.data.domain.Page;

public interface PartenaireAppService {

    PartenaireDTO sauver(PartenaireDTO clientDTO);

    PartenaireDTO modifier(PartenaireDTO clientDTO);

    PartenaireDTO findById(Long id);

    Page<PartenaireDTO> findAll();
}
