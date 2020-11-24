package com.spiral.express.service.impl;

import com.spiral.express.domain.Envoi;
import com.spiral.express.domain.enumeration.StatutEnvoi;
import com.spiral.express.service.MailService;
import com.spiral.express.service.SmsService;
import com.spiral.express.service.StatutEnvoiService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class StatutEnvoiServiceImpl implements StatutEnvoiService {
    private Logger log = LoggerFactory.getLogger(getClass());

    private final SmsService smsService;
    private final MailService mailService;

    public StatutEnvoiServiceImpl(SmsService smsService, MailService mailService) {
        this.smsService = smsService;
        this.mailService = mailService;
    }

    @Override
    public Envoi prisEnCharge(Envoi envoi) {
        log.info("Prise en charge de l'envoi: {}", envoi);

        String destinataireMsg = "Un coli vous ai destiné";
        String tel = "+" + envoi.getDestinataire().getPersonne().getTelephone();
        smsService.sendSms(tel, destinataireMsg);

        String expediteurMsg = "Votre coli est bien pris en charge.";
        String tel2 = "+" + envoi.getExpediteur().getPersonne().getTelephone();
        smsService.sendSms(tel2, expediteurMsg);

        String subject = "Suivi envoi: " + envoi.getReference();
        String contenu = "Suivez votre envoi";

        mailService.sendEmail(envoi.getDestinataire().getPersonne().getEmail(), subject, contenu);

        mailService.sendEmail(envoi.getExpediteur().getPersonne().getEmail(), subject, contenu);

        envoi.setStatut(StatutEnvoi.PRISE_EN_CHARGE);

        return envoi;
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
