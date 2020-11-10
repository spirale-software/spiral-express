package com.spiral.express.web.rest;

import com.spiral.express.dto.ClientDTO;
import com.spiral.express.service.ClientAppService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/express")
public class ClientAppResource {
    private Logger log = LoggerFactory.getLogger(getClass());

    private final ClientAppService clientAppService;

    public ClientAppResource(ClientAppService clientAppService) {
        this.clientAppService = clientAppService;
    }

    @PostMapping("clients")
    public ResponseEntity<ClientDTO> create(@RequestBody ClientDTO clientDTO) {
        log.info("Requête REST pour créer un nouveau client");
        return ResponseEntity.ok(clientAppService.sauver(clientDTO));
    }

    @PutMapping("clients")
    public ResponseEntity<ClientDTO> update(@RequestBody ClientDTO clientDTO) {
        log.info("Requête REST pour modifier un client");
        return ResponseEntity.ok(clientAppService.modifier(clientDTO));
    }

    @GetMapping("clients/{id}")
    public ResponseEntity<ClientDTO> getById(@PathVariable Long id) {
        log.info("Requête REST pour obtenir un client avec pour id: {}", id);
        return ResponseEntity.ok(clientAppService.findById(id));
    }

    @GetMapping("clients")
    public ResponseEntity<List<ClientDTO>> getAll() {
        log.info("Requête REST pour obtenir tous les clients");
        return ResponseEntity.ok(clientAppService.findAll().getContent());
    }
}
