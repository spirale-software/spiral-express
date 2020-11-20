import {Pipe, PipeTransform} from "@angular/core";
import {StatutEnvoi} from "../model/statut-envoi";

@Pipe({ name: 'statutLabel' })
export class StatutLabelPipe implements PipeTransform {

    transform(value: any, ...args: any[]): any {
        let statut = '';
        if (value === StatutEnvoi.PRISE_EN_CHARGE) {
            statut = 'Pris en charge';
        } else if (value === StatutEnvoi.A_ENLEVER) {
            statut = 'A Enlever';
        } else if (value === StatutEnvoi.EN_LIVRAISON) {
            statut = 'En livraison';
        } else if (value === StatutEnvoi.EN_ATTENTE) {
            statut = 'En attente';
        } else if (value === StatutEnvoi.ARRIVER_ET_SCANNER_AU_DEPOT) {
            statut = 'Arriver et scanner au dépôt';
        }

        return statut;
    }
}
