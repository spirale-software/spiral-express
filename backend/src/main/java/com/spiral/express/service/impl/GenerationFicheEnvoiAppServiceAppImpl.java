package com.spiral.express.service.impl;

import com.itextpdf.html2pdf.HtmlConverter;
import com.spiral.express.domain.Adresse;
import com.spiral.express.domain.Envoi;
import com.spiral.express.domain.Personne;
import com.spiral.express.repository.EnvoiAppRepository;
import com.spiral.express.service.GenerationFicheEnvoiAppService;
import com.spiral.express.service.error.ElementNonExistantException;
import com.spiral.express.service.error.GenerationFicheEnvoiException;
import com.spiral.express.utils.EnvoiTemplateVars;
import com.spiral.express.utils.FreemarkerUtils;
import com.spiral.express.utils.QrCodeUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ResourceUtils;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

@Service
@Transactional
public class GenerationFicheEnvoiAppServiceAppImpl implements GenerationFicheEnvoiAppService {
    private Logger log = LoggerFactory.getLogger(getClass());

    private final EnvoiAppRepository envoiAppRepository;

    @Autowired
    private ResourceLoader resourceLoader;

    public GenerationFicheEnvoiAppServiceAppImpl(EnvoiAppRepository envoiAppRepository) {
        this.envoiAppRepository = envoiAppRepository;
    }

    @Override
    public byte[] genererPdfAsByteArray(Long envoiId) {
        log.info("Generer le pdf de la fiche envoi avec pour id: {}", envoiId);

        Envoi envoi = envoiAppRepository
            .findById(envoiId)
            .orElseThrow(() -> new ElementNonExistantException("Pas d'Envoi avec cet ID: " + envoiId));

        File file = null;
        try {
            file = resourceLoader.getResource("classpath:templates").getFile();
        } catch (Exception e) {
            e.printStackTrace();
            log.error("Le fichier \"classpath:templates\" n'a pas pu être trouvé");
            throw new GenerationFicheEnvoiException("Erreur lors du chargement du repertoire 'templates'");
        }
        String fileName = "envoi.ftl";
        String html = FreemarkerUtils.loadFtlHtml(file.getParentFile(), fileName, getVariables(envoi));

        ByteArrayOutputStream stream = new ByteArrayOutputStream();
        try {
            HtmlConverter.convertToPdf(html, stream);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return stream.toByteArray();
    }

    private Map<String, String> getVariables(Envoi envoi) {
        File qrCodeFile = null;
        try {
            qrCodeFile = resourceLoader.getResource("classpath:qrcode/qrcode-01.png").getFile();
        } catch (Exception e) {
            e.printStackTrace();
            log.error("Le fichier \"classpath:qrcode/qrcode-01.png\" n'a pas pu être trouvé");
            throw new GenerationFicheEnvoiException("Erreur lor du chargement de la resource 'qrcode/qrcode-01.png");
        }

        QrCodeUtils.genererQrCode(envoi.getReference(), qrCodeFile.getPath());

        Map<String, String> map = new HashMap<>();
        map.put(EnvoiTemplateVars.EXPEDITEUR_FULL_NAME, getFullName(envoi.getExpediteur().getPersonne()));
        map.put(EnvoiTemplateVars.EXPEDITEUR_ADRESSE_1, getAdresse1(envoi.getExpediteur().getPersonne()));
        map.put(EnvoiTemplateVars.EXPEDITEUR_ADRESSE_2, getAdresse2(envoi.getExpediteur().getPersonne()));

        map.put(EnvoiTemplateVars.DESTINATAIRE_FULL_NAME, getFullName(envoi.getDestinataire().getPersonne()));
        map.put(EnvoiTemplateVars.DESTINATAIRE_ADRESSE_1, getAdresse1(envoi.getDestinataire().getPersonne()));
        map.put(EnvoiTemplateVars.DESTINATAIRE_ADRESSE_2, getAdresse2(envoi.getDestinataire().getPersonne()));

        map.put(EnvoiTemplateVars.COLI_NBR_UNITE, "1");
        map.put(EnvoiTemplateVars.COLI_POIDS, envoi.getColi().getPoids().toString());
        Double volume = envoi.getColi().getHauteur() * envoi.getColi().getLargeur() * envoi.getColi().getLongueur();
        map.put(EnvoiTemplateVars.COLI_VOLUME, volume.toString());
        map.put(EnvoiTemplateVars.COLI_DESCRIPTION, envoi.getColi().getDescription());

        map.put(EnvoiTemplateVars.LIEN_QR_CODE, qrCodeFile.getPath());
        map.put(EnvoiTemplateVars.ENVOI_REFERENCE, envoi.getReference());

        return map;
    }

    private String getFullName(Personne personne) {
       return new StringBuilder()
           .append(personne.getNom().toUpperCase())
           .append(" ")
           .append(personne.getPrenom().toUpperCase()).toString();
    }

    private String getAdresse1(Personne personne) {
        Adresse adresse = personne.getAdresse();
        return new StringBuilder().append(adresse.getRue().toUpperCase()).toString();
    }

    private String getAdresse2(Personne personne) {
        Adresse adresse = personne.getAdresse();
        return new StringBuilder()
            .append(adresse.getCodePostal())
            .append(" ")
            .append(adresse.getVille().toUpperCase())
            .append(", ")
            .append(adresse.getPays()).toString();
    }
}
