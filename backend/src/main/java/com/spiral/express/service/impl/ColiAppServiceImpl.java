package com.spiral.express.service.impl;

import com.spiral.express.domain.Coli;
import com.spiral.express.dto.ColiDTO;
import com.spiral.express.repository.ColiAppRepository;
import com.spiral.express.service.ColiAppService;
import com.spiral.express.service.mapper.ColiMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ColiAppServiceImpl implements ColiAppService {
    private Logger log = LoggerFactory.getLogger(getClass());

    private final ColiMapper coliMapper;
    private final ColiAppRepository coliAppRepository;

    public ColiAppServiceImpl(ColiMapper coliMapper, ColiAppRepository coliAppRepository) {
        this.coliMapper = coliMapper;
        this.coliAppRepository = coliAppRepository;
    }

    @Override
    public Coli create(ColiDTO dto) {
        log.info("Créer un nouveau coli: {}", dto);
        Coli coli = coliMapper.toEntity(dto);
        return coliAppRepository.save(coli);
    }
}
