package com.spiral.express.service.impl;

import com.spiral.express.domain.Coli;
import com.spiral.express.domain.Envoi;
import com.spiral.express.dto.EnvoiDTO;
import com.spiral.express.repository.EnvoiAppRepository;
import com.spiral.express.service.ColiAppService;
import com.spiral.express.service.EnvoiAppService;
import com.spiral.express.service.StatutEnvoiService;
import com.spiral.express.service.error.ElementNonExistantException;
import com.spiral.express.service.mapper.EnvoiMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Random;

@Service
public class EnvoiAppServiceImpl implements EnvoiAppService {
    private Logger log = LoggerFactory.getLogger(getClass());

    private final EnvoiMapper envoiMapper;
    private final EnvoiAppRepository envoiAppRepository;
    private final ColiAppService coliAppService;
    private final StatutEnvoiService statutEnvoiService;

    private Random random;

    public EnvoiAppServiceImpl(EnvoiMapper envoiMapper, EnvoiAppRepository envoiAppRepository,
                               ColiAppService coliAppService, StatutEnvoiService statutEnvoiService) {
        this.envoiMapper = envoiMapper;
        this.envoiAppRepository = envoiAppRepository;
        this.coliAppService = coliAppService;
        this.statutEnvoiService = statutEnvoiService;
        this.random = new Random();
    }

    @Override
    public EnvoiDTO create(EnvoiDTO dto) {
        log.info("Créer un nouvel envoi: {}", dto);

        // une exceptipn ?
        if (dto.getExpediteur() == null || dto.getExpediteur().getPersonneId() == null) {
            System.out.println("L'expéditeur ne peut être null.");
        }
        if (dto.getDestinataire() == null || dto.getDestinataire().getPersonneId() == null) {
            System.out.println("Le destinataire ne peut être null.");
        }
        if (dto.getPartenaire() == null || dto.getPartenaire().getPersonneId() == null) {
        	System.out.println("Le partenaire ne peut être null.");
        }
        
        System.out.println("PartenaireDto ***** " + dto.getPartenaire().getNom());
        
        Coli coli = coliAppService.create(dto.getColi());
        Envoi envoi = envoiMapper.toEntity(dto);
        envoi.setColi(coli);
        envoi.setReference(getReference());
        envoi.setDateCreation(ZonedDateTime.now());
        envoi = statutEnvoiService.prisEnCharge(envoi);
        envoi = envoiAppRepository.save(envoi);

        return envoiMapper.toDto(envoi);
    }

    @Override
    public EnvoiDTO update(EnvoiDTO dto) {
        log.info("Modifier un envoi: {}", dto);
        
        return envoiMapper.toDto(envoiAppRepository.save(envoiMapper.toEntity(dto)));
    }

    @Override
    public List<EnvoiDTO> findAll() {
        log.info("Obtenir tous les Envois");

        List<Envoi> envoiList = envoiAppRepository.findAll();
        return envoiMapper.toDtos(envoiList);
    }

    @Override
    public EnvoiDTO findById(Long id) {
        log.info("Obtenir un Envoi avec pour id: {}", id);

        return envoiAppRepository
            .findById(id)
            .map(envoiMapper::toDto)
            .orElseThrow(() -> new ElementNonExistantException("Pas d'Envoi avec cet ID: " + id));
    }

    @Override
    public EnvoiDTO findByReference(String reference) {
        return envoiAppRepository
            .findByReference(reference)
            .map(envoiMapper::toDto)
            .orElseThrow(() -> new ElementNonExistantException("Pas d'Envoi avec cette référence: " + reference));
    }

    private String getReference() {
        Integer ref = random.nextInt(900000000) + 100000000;
        return String.valueOf(ref);
    }
}
