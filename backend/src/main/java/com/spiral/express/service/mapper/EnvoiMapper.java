package com.spiral.express.service.mapper;

import com.spiral.express.domain.Envoi;
import com.spiral.express.dto.EnvoiDTO;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring", uses = {ColiMapper.class, DestinataireMapper.class, ClientMapper.class})
public interface EnvoiMapper {

    EnvoiDTO toDto(Envoi entity);

    List<EnvoiDTO> toDtos(List<Envoi> entities);

    Envoi toEntity(EnvoiDTO dto);

    List<Envoi> toEntities(List<EnvoiDTO> dtos);
}
