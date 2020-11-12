package com.spiral.express.utils;

import com.spiral.express.domain.Client;
import com.spiral.express.domain.Client_;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class ClientSpecifications {

    public static Specification<Client> isClientActif() {
        return new Specification<Client>() {
            @Override
            public Predicate toPredicate(Root<Client> root, CriteriaQuery<?> cq, CriteriaBuilder cb) {
                return cb.equal(root.get(Client_.ACTIF), true);

            }
        };
    }
}
