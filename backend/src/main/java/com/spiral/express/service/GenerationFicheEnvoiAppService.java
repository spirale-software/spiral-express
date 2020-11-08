package com.spiral.express.service;

public interface GenerationFicheEnvoiAppService {

    byte[] genererPdfAsByteArray(Long envoiId);
}
