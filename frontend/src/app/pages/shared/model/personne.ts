import {Adresse} from "./adresse";

export interface Personne {
    personneId ?: number;
    nom ?: string;
    prenom ?: string;
    adresse ?: Adresse;
    telephone ?: string;
    email ?: string;
}
