package com.spiral.express.service;



import com.spiral.express.dto.EnvoiDTO;

import java.util.List;

public interface EnvoiAppService {

    EnvoiDTO create(EnvoiDTO dto);

    EnvoiDTO update(EnvoiDTO dto);

    List<EnvoiDTO> findAll();

    EnvoiDTO findById(Long id);

    EnvoiDTO findByReference(String reference);

}
