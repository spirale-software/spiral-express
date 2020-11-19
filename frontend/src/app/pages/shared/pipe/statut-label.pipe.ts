import {Pipe, PipeTransform} from "@angular/core";
import {StatutEnvoi} from "../model/statut-envoi";

@Pipe({ name: 'statutLabel' })
export class StatutLabelPipe implements PipeTransform {

    transform(value: any, ...args: any[]): any {
        let statut;
        console.log('StatutLabelPipe: ', value);
        console.log('PRISE_EN_CHARGE: ', StatutEnvoi.PRISE_EN_CHARGE);
        if (value === StatutEnvoi.PRISE_EN_CHARGE) {
            statut = 'Pris en charge';
        }

        return statut;
    }
}
