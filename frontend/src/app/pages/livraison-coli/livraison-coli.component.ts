import {Component, OnInit} from "@angular/core";
import {MenuItem} from "primeng";
import {Router} from "@angular/router";

@Component({
    selector: 'app-livraison-coli',
    templateUrl: './livraison-coli.component.html'
})
export class LivraisonColiComponent implements OnInit {

    breadcrumbItems: MenuItem[];

    constructor(private router: Router) {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'Livraison coli'});
    }

    ngOnInit(): void {
    }

    onScanSuccess(reference: number) {
        this.router.navigate(['/envois', reference, 'livraison-coli']);
    }
}
