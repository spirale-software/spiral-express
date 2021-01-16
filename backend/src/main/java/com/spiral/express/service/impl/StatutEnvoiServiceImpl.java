package com.spiral.express.service.impl;

import com.spiral.express.config.ApplicationProperties;
import com.spiral.express.domain.Envoi;
import com.spiral.express.domain.Personne;
import com.spiral.express.domain.enumeration.StatutEnvoi;
import com.spiral.express.service.MailService;
import com.spiral.express.service.SmsService;
import com.spiral.express.service.StatutEnvoiService;
import com.spiral.express.utils.CodePaysUtils;
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
    private final ApplicationProperties appProperties;

    public StatutEnvoiServiceImpl(SmsService smsService, MailService mailService, ApplicationProperties appProperties) {
        this.smsService = smsService;
        this.mailService = mailService;
        this.appProperties = appProperties;
    }

    @Override
    public Envoi prisEnCharge(Envoi envoi) {
        log.info("Prise en charge de l'envoi: {}", envoi);

        if (appProperties.isSendSms()) {
            String destinataireMsg = "Un coli vous ai destiné";
            Personne destinataire = envoi.getDestinataire().getPersonne();
            String tel = CodePaysUtils.getCodePays(destinataire.getAdresse().getPays()) + destinataire.getTelephone();
            smsService.sendSms(tel, destinataireMsg);

            String expediteurMsg = "Votre coli est bien pris en charge.";
            Personne expediteur = envoi.getExpediteur().getPersonne();
            String tel2 = CodePaysUtils.getCodePays(expediteur.getAdresse().getPays()) + expediteur.getTelephone();
            smsService.sendSms(tel2, expediteurMsg);
        }

        String subject = "Suivi envoi: " + envoi.getReference();
        String contenu = "Suivez votre envoi";

        if (envoi.getDestinataire().getPersonne().getEmail() != null) {
            mailService.sendEmail(envoi.getDestinataire().getPersonne().getEmail(), subject, contenu);
        }

        if (envoi.getExpediteur().getPersonne().getEmail() != null) {
            mailService.sendEmail(envoi.getExpediteur().getPersonne().getEmail(), subject, contenu);
        }

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
