package com.spiral.express.web.rest;

import com.spiral.express.dto.UtilisateurDTO;
import com.spiral.express.service.UtilisateurService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/express")
public class UtilisateurResource {
    private final Logger log = LoggerFactory.getLogger(getClass());

    private UtilisateurService utilisateurService;

    public UtilisateurResource(UtilisateurService utilisateurService) {
        this.utilisateurService = utilisateurService;
    }

    @GetMapping("/utilisateur-courant")
    public ResponseEntity<UtilisateurDTO> getCurrentUser() {
        log.info("Requête REST pour obtenir l'utilisateur courant.");

        return ResponseEntity.ok(utilisateurService.getCurrentUser());
    }

    @GetMapping("/utilisateurs")
    public ResponseEntity<List<UtilisateurDTO>> findAllUtilisateurs() {
        return null;
    }

    @PostMapping("/utilisateurs")
    public ResponseEntity<UtilisateurDTO> create(UtilisateurDTO dto) {
        return null;
    }

    @PutMapping("/utilisateurs")
    public ResponseEntity<UtilisateurDTO> update(UtilisateurDTO dto) {
        return null;
    }
}
