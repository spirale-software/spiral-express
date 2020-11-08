import {Component} from "@angular/core";
import {Coli} from "../shared/model/coli";
import {Utils} from "../shared/util/utils";
import {Client} from "../shared/model/client";
import {Envoi} from "../shared/model/envoi";

@Component({
    selector: 'app-tableau-de-bord',
    templateUrl: './tableau-de-bord.component.html'
})
export class TableauDeBordComponent {

    envois: Envoi[];

    constructor() {
        this.envois = [];
    }

    getVolume(coli: Coli): number {
        return Utils.getVolume(coli);
    }

    getExpediteur(expediteur: Client): string {
        return Utils.getExpediteur(expediteur);
    }

    getPaysExpedition(expediteur): string{
        return null;
    }
}
