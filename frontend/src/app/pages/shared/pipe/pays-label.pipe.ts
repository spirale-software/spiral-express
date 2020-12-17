import {Pipe, PipeTransform} from "@angular/core";
import {Pays} from "../model/pays";

@Pipe({name: 'paysLabel'})
export class PaysLabelPipe implements PipeTransform {

    transform(value: any, ...args: any[]): any {
        let result = '';
        if (value) {
            if (value === Pays.CAMEROUN) {
                result = "Cameroun"
            } else if (value === Pays.BURKINA_FASO) {
                result = "Burkina faso"
            } else if (value === Pays.CONGO_BRAZZAVILLE) {
                result = 'Congo brazzaville'
            } else if (value === Pays.RWANDA) {
                result = 'Rwanda'
            } else if (value === Pays.BELGIQUE) {
                result = "Belgique"
            } else if (value === Pays.LUXEMBOURG) {
                result = "Luxembourg"
            }  else if (value === Pays.ALLEMAGNE) {
                result = "Allemagne"
            }  else if (value === Pays.FRANCE) {
                result = "France"
            }
        }
        return result;
    }

}
