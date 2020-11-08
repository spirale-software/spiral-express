import {Personne} from "./personne";

export interface Client extends Personne {
    id: number;
    numero: number;
}
