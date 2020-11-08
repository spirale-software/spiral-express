package com.spiral.express.service.mapper;

import com.spiral.express.domain.Personne;
import com.spiral.express.dto.PersonneDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {AdresseMapper.class})
public interface PersonneMapper extends EntityMapper<Personne, PersonneDTO> {
}
