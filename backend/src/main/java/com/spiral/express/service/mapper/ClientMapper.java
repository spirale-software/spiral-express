package com.spiral.express.service.mapper;


import com.spiral.express.domain.Client;
import com.spiral.express.dto.ClientDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {AdresseMapper.class, PersonneMapper.class})
public interface ClientMapper extends EntityMapper<Client, ClientDTO> {

    @Mapping(source = "personne.id", target = "personneId")
    @Mapping(source = "personne.nom", target = "nom")
    @Mapping(source = "personne.prenom", target = "prenom")
    @Mapping(source = "personne.adresse", target = "adresse")
    @Mapping(source = "personne.telephone", target = "telephone")
    @Mapping(source = "personne.email", target = "email")
    ClientDTO toDto(Client entity);

    @Mapping(source = "personneId", target = "personne.id")
    @Mapping(source = "nom", target = "personne.nom")
    @Mapping(source = "prenom", target = "personne.prenom")
    @Mapping(source = "adresse", target = "personne.adresse")
    @Mapping(source = "telephone", target = "personne.telephone")
    @Mapping(source = "email", target = "personne.email")
    Client toEntity(ClientDTO dto);
}
