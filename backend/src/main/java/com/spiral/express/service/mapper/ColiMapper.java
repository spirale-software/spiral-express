package com.spiral.express.service.mapper;

import com.spiral.express.domain.Coli;
import com.spiral.express.dto.ColiDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {})
public interface ColiMapper extends EntityMapper<Coli, ColiDTO> {
}
