package com.spiral.express.service.impl;

import com.spiral.express.domain.Utilisateur;
import com.spiral.express.dto.UtilisateurDTO;
import com.spiral.express.repository.UtilisateurRepository;
import com.spiral.express.security.SecurityUtil;
import com.spiral.express.service.UtilisateurService;
import com.spiral.express.service.error.ElementNonExistantException;
import com.spiral.express.service.mapper.UtilisateurMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UtilisateurServiceImpl implements UtilisateurService {
    private Logger log = LoggerFactory.getLogger(getClass());

    private final UtilisateurRepository utilisateurRepository;
    private final UtilisateurMapper utilisateurMapper;

    public UtilisateurServiceImpl(UtilisateurRepository utilisateurRepository, UtilisateurMapper utilisateurMapper) {
        this.utilisateurRepository = utilisateurRepository;
        this.utilisateurMapper = utilisateurMapper;
    }

    @Override
    public UtilisateurDTO getCurrentUser() {
        log.info("Obtenir utilisateur courant");
        String currentUserLoin = SecurityUtil.getCurrentUserLoin();
        System.out.println("currentUserLoin: " + currentUserLoin);
        return null;

//        return utilisateurRepository
//                .findByLogin(currentUserLoin)
//                .map(utilisateurMapper::toDto)
//                .orElseThrow(() -> new ElementNonExistantException("Pas d'utilisateur avec ce Login: " + currentUserLoin));
    }


    @Override
    public Utilisateur getUtilisateurByLogin(String login) {
        return null;
    }

    @Override
    public Utilisateur getUtilisateurById(Long id) {
        return null;
    }

    @Override
    public List<Utilisateur> getAllUtilisateurs() {
        return null;
    }

    @Override
    public Utilisateur createUtilisateur(UtilisateurDTO dto) {
        return null;
    }

    @Override
    public Utilisateur modifiertilisateur(UtilisateurDTO dto) {
        return null;
    }
}
