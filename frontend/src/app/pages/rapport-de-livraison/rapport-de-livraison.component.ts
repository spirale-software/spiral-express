import {Component} from "@angular/core";
import {MenuItem} from "primeng";

@Component({
    selector: 'app-rapport-de-livraison',
    templateUrl: './rapport-de-livraison.component.html'
})
export class RapportDeLivraisonComponent {

    breadcrumbItems: MenuItem[];

    constructor() {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'Rapport de livraison'});
    }

}
