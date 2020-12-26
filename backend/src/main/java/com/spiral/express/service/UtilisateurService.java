package com.spiral.express.service;

import com.spiral.express.domain.Utilisateur;
import com.spiral.express.dto.UtilisateurDTO;

import java.util.List;

public interface UtilisateurService {

    Utilisateur getCurrentUser();
    Utilisateur getUtilisateurByLogin(String login);
    Utilisateur getUtilisateurById(Long id);
    List<Utilisateur> getAllUtilisateurs();
    Utilisateur createUtilisateur(UtilisateurDTO dto);
    Utilisateur modifiertilisateur(UtilisateurDTO dto);
}
