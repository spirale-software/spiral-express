package com.spiral.express.service.mapper;


import com.spiral.express.domain.Adresse;
import com.spiral.express.dto.AdresseDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {})
public interface AdresseMapper extends EntityMapper<Adresse, AdresseDTO> {
}
