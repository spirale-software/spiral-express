import {Component} from "@angular/core";
import {MenuItem} from "primeng";
import {Router} from "@angular/router";

@Component({
    selector: 'app-rapport-de-livraison',
    templateUrl: './rapport-de-livraison.component.html'
})
export class RapportDeLivraisonComponent {

    breadcrumbItems: MenuItem[];

    constructor(private router: Router) {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'Rapport de livraison'});
    }

    onScanSuccess(reference): void {
        if (reference) {
            this.router.navigate(['/envois', reference, 'rapport-de-livraison']);
        }
    }

}
