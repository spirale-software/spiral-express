import {Personne} from './personne';
import {Client} from './client';

export interface Destinataire extends Personne {
    client ?: Client;
    id ?: number;
}
