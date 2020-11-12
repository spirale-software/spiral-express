package com.spiral.express.service.impl;

import com.spiral.express.domain.Client;
import com.spiral.express.domain.Personne;
import com.spiral.express.dto.ClientDTO;
import com.spiral.express.repository.ClientAppRepository;
import com.spiral.express.service.ClientAppService;
import com.spiral.express.service.DestinataireAppService;
import com.spiral.express.service.PersonneAppService;
import com.spiral.express.service.error.ElementNonExistantException;
import com.spiral.express.service.mapper.ClientMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.Random;

import static com.spiral.express.utils.ClientSpecifications.isClientActif;

@Service
@Transactional
public class ClientAppServiceImpl implements ClientAppService {
    private final Logger log = LoggerFactory.getLogger(getClass());

    private final ClientAppRepository clientAppRepository;
    private final ClientMapper clientMapper;
    private final PersonneAppService personneAppService;
    private final DestinataireAppService destinataireAppService;

    public ClientAppServiceImpl(ClientAppRepository clientAppRepository,
                                ClientMapper clientMapper,
                                PersonneAppService personneAppService,
                                DestinataireAppService destinataireAppService) {
        this.clientAppRepository = clientAppRepository;
        this.clientMapper = clientMapper;
        this.personneAppService = personneAppService;
        this.destinataireAppService = destinataireAppService;
    }

    @Override
    public ClientDTO sauver(ClientDTO clientDTO) {
        log.info("Sauver un nouveau client");

        if (clientDTO.getId() != null) {
            throw new IllegalArgumentException("Un nouveau client ne peut pas déjà avoir un ID");
        }
        clientDTO.setNumero(new Random().nextLong());

        return creerClient(clientDTO);
    }



    @Override
    public ClientDTO modifier(ClientDTO clientDTO) {
        log.info("Modifier un client");
        if (clientDTO.getId() == null) {
            throw new IllegalArgumentException("Pas de modification d'un client sans ID");
        }
        return creerClient(clientDTO);
    }

    @Override
    public ClientDTO findById(Long id) {
        log.info("Rechercher un client par id: {}", id);
        return clientAppRepository
            .findById(id)
            .map(clientMapper::toDto)
            .orElseThrow(() -> new ElementNonExistantException("Pas de client avec cet id: " + id));
    }

    @Override
    public Page<ClientDTO> findAll() {
        log.info("Rechercher tous les clients");
        Pageable pageable = Pageable.unpaged();
        Page<Client> all = clientAppRepository.findAll(isClientActif(), pageable);
        return all.map(clientMapper::toDto);
    }

    @Override
    public void deleteById(Long clientId) {
        log.info("Suprimer un client par son ID: {}", clientId);
        Client client = clientAppRepository
                .findById(clientId)
                .orElseThrow(() -> new ElementNonExistantException("Pas de client avec cet ID: " + clientId));

        client.setActif(false);

        clientAppRepository.save(client);
    }

    private ClientDTO creerClient(ClientDTO clientDTO) {
        Client client = clientMapper.toEntity(clientDTO);
        Personne personne = personneAppService.sauver(client.getPersonne());
        client.setPersonne(personne);
        client = clientAppRepository.save(client);
        return clientMapper.toDto(client);
    }
}
