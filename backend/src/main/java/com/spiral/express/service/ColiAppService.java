package com.spiral.express.service;


import com.spiral.express.domain.Coli;
import com.spiral.express.dto.ColiDTO;

public interface ColiAppService {

    Coli create(ColiDTO dto);
}
