package com.spiral.express.service;

import com.spiral.express.domain.Envoi;

public interface StatutEnvoiService {

    Envoi prisEnCharge(Envoi envoi);

    Envoi enLivraison(Envoi envoi);

    Envoi arriverEtScanner(Envoi envoi);

    Envoi aEnlever(Envoi envoi);

    Envoi livrer(Envoi envoi);
}
