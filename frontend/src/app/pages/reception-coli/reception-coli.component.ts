import {Component, OnInit} from "@angular/core";
import {MenuItem} from "primeng";

@Component({
    selector: 'app-reception-coli',
    templateUrl: './reception-coli.component.html'
})
export class ReceptionColiComponent implements OnInit {

    breadcrumbItems: MenuItem[];

    constructor() {}

    ngOnInit(): void {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'Réception coli'});
    }
}
