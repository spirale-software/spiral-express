import {Component} from '@angular/core';
import {MenuItem} from 'primeng';
import {Router} from '@angular/router';

@Component({
    selector: 'app-rapport-de-quai',
    templateUrl: './rapport-de-quai.component.html'
})
export class RapportDeQuaiComponent {

    breadcrumbItems: MenuItem[];

    constructor(protected router: Router) {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'Rapport de quai'});
    }

    onScanSuccess(reference: number) {
        this.router.navigate(['/envois', reference, 'rapport-de-quai']);
    }

}

