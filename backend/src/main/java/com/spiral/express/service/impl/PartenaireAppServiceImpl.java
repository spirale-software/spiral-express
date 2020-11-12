package com.spiral.express.service.impl;

import com.spiral.express.domain.Partenaire;
import com.spiral.express.domain.Personne;
import com.spiral.express.dto.PartenaireDTO;
import com.spiral.express.repository.PartenaireAppRepository;
import com.spiral.express.service.PartenaireAppService;
import com.spiral.express.service.PersonneAppService;
import com.spiral.express.service.error.ElementNonExistantException;
import com.spiral.express.service.mapper.PartenaireMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class PartenaireAppServiceImpl implements PartenaireAppService {
    private final Logger log = LoggerFactory.getLogger(getClass());

    private final PartenaireAppRepository partenaireAppRepository;
    private final PartenaireMapper partenaireMapper;
    private final PersonneAppService personneAppService;

    public PartenaireAppServiceImpl(PartenaireAppRepository partenaireAppRepository, PartenaireMapper partenaireMapper,
                                    PersonneAppService personneAppService) {
        this.partenaireAppRepository = partenaireAppRepository;
        this.partenaireMapper = partenaireMapper;
        this.personneAppService = personneAppService;
    }

    @Override
    public PartenaireDTO sauver(PartenaireDTO partenaireDTO) {
        log.info("Créer un nouveau partenaire: {}", partenaireDTO);
        Partenaire partenaire = partenaireMapper.toEntity(partenaireDTO);
        Personne personne = personneAppService.sauver(partenaire.getPersonne());
        partenaire.setPersonne(personne);
        return partenaireMapper.toDto(partenaireAppRepository.save(partenaire));
    }

    @Override
    public PartenaireDTO modifier(PartenaireDTO partenaireDTO) {
        log.info("Modifier un partenaire: {}", partenaireDTO);
        return null;
    }

    @Override
    public PartenaireDTO findById(Long id) {
        log.info("Rechercher un partenaire via l'id: {}", id);
        return partenaireAppRepository
            .findById(id)
            .map(partenaireMapper::toDto)
            .orElseThrow(() -> new ElementNonExistantException("Pas de partenaire avec cet id: " + id));
    }

    @Override
    public Page<PartenaireDTO> findAll() {
        log.info("Rechercher tous les partenaire");
        log.info("Rechercher tous les clients");
        Pageable pageable = Pageable.unpaged();
        return partenaireAppRepository
            .findAll(pageable)
            .map(partenaireMapper::toDto);
    }

    @Override
    public void deleteById(Long id) {
        log.info("Supprimer un partenaire par son id: {}", id);
        partenaireAppRepository.deleteById(id);
    }
}
