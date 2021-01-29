import {Coli} from './coli';
import {Client} from './client';
import {Personne} from './personne';
import {StatutEnvoi} from './statut-envoi';
import {Partenaire} from "./partenaire";
import {Destinataire} from "./destinataire";

export interface Envoi {
    id ?: number;
    dateCreation ?: Date;
    statut ?: StatutEnvoi;
    reference ?: string;
    coli ?: Coli;
    expediteur ?: Client;
    destinataire ?: Destinataire;
    partenaire ?: Partenaire;
    rapportQuai ?: string;
    rapportLivraisaon ?: string;
    montant ?: number;
}
