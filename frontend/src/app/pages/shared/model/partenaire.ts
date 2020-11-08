import {Personne} from "./personne";

export interface Partenaire extends Personne {
    id ?: number;
    matricule ?: number;
}
