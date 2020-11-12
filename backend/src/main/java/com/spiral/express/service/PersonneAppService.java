package com.spiral.express.service;


import com.spiral.express.domain.Personne;
import com.spiral.express.dto.PersonneDTO;

public interface PersonneAppService {

    Personne sauver(PersonneDTO personneDTO);

    Personne sauver(Personne personne);

    void deleteById(Long id);
}
