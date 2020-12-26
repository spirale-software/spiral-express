package com.spiral.express.service.impl;

import com.spiral.express.domain.Utilisateur;
import com.spiral.express.dto.UtilisateurDTO;
import com.spiral.express.service.UtilisateurService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UtilisateurServiceImpl implements UtilisateurService {
    private Logger log = LoggerFactory.getLogger(getClass());


    @Override
    public Utilisateur getCurrentUser() {
        return null;
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
