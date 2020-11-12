package com.spiral.express.service.impl;

import com.spiral.express.domain.Adresse;
import com.spiral.express.domain.Personne;
import com.spiral.express.dto.PersonneDTO;
import com.spiral.express.repository.AdresseAppRepository;
import com.spiral.express.repository.PersonneAppRepository;
import com.spiral.express.service.PersonneAppService;
import com.spiral.express.service.mapper.PersonneMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class PersonneAppServiceImpl implements PersonneAppService {
    private final Logger log = LoggerFactory.getLogger(getClass());

    private final AdresseAppRepository adresseAppRepository;
    private final PersonneAppRepository personneAppRepository;
    private final PersonneMapper personneMapper;

    public PersonneAppServiceImpl(AdresseAppRepository adresseAppRepository,
                                  PersonneAppRepository personneAppRepository,
                                  PersonneMapper personneMapper) {
        this.adresseAppRepository = adresseAppRepository;
        this.personneAppRepository = personneAppRepository;
        this.personneMapper = personneMapper;
    }

    @Override
    public Personne sauver(PersonneDTO personneDTO) {
        Personne personne = personneMapper.toEntity(personneDTO);
        return sauver(personne);
    }

    @Override
    public Personne sauver(Personne personne) {
        Adresse adresse = adresseAppRepository.save(personne.getAdresse());
        personne.setAdresse(adresse);
        return personneAppRepository.save(personne);
    }

    @Override
    public void deleteById(Long id) {
        log.info("Supprimer une personne par son ID: {}", id);
        personneAppRepository.deleteById(id);
    }
}
