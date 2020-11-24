package com.spiral.express.service.impl;

import com.spiral.express.domain.Envoi;
import com.spiral.express.service.StatutEnvoiService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class StatutEnvoiServiceImpl implements StatutEnvoiService {
    private Logger log = LoggerFactory.getLogger(getClass());


    @Override
    public Envoi prisEnCharge(Envoi envoi) {
        log.info("Prise en charge de l'envoi: {}", envoi);
        return null;
    }

    @Override
    public Envoi enLivraison(Envoi envoi) {
        return null;
    }

    @Override
    public Envoi arriverEtScanner(Envoi envoi) {
        return null;
    }

    @Override
    public Envoi aEnlever(Envoi envoi) {
        return null;
    }

    @Override
    public Envoi livrer(Envoi envoi) {
        return null;
    }
}
