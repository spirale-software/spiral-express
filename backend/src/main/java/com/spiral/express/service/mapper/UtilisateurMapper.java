package com.spiral.express.service.mapper;

import com.spiral.express.domain.Client;
import com.spiral.express.domain.Utilisateur;
import com.spiral.express.dto.ClientDTO;
import com.spiral.express.dto.UtilisateurDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {AdresseMapper.class, PersonneMapper.class})
public interface UtilisateurMapper extends EntityMapper<Utilisateur, UtilisateurDTO> {

    @Mapping(source = "personne.id", target = "personneId")
    @Mapping(source = "personne.nom", target = "nom")
    @Mapping(source = "personne.prenom", target = "prenom")
    @Mapping(source = "personne.adresse", target = "adresse")
    @Mapping(source = "personne.telephone", target = "telephone")
    @Mapping(source = "personne.email", target = "email")
    UtilisateurDTO toDto(Utilisateur entity);
}
