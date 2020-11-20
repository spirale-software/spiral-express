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
            }
        }
        return result;
    }

}
