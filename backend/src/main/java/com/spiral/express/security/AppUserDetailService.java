package com.spiral.express.security;

import com.spiral.express.domain.Utilisateur;
import com.spiral.express.service.UtilisateurService;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class AppUserDetailService implements UserDetailsService {

    private final UtilisateurService utilisateurService;

    public AppUserDetailService(UtilisateurService utilisateurService) {
        this.utilisateurService = utilisateurService;
    }

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        Utilisateur utilisateur = utilisateurService.getUtilisateurByLogin(login);

        return new User(utilisateur.getLogin(),utilisateur.getPassword() , new ArrayList<>());
    }
}
