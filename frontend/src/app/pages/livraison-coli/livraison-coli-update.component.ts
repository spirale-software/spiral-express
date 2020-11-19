import {Component, OnInit} from '@angular/core';
import {EnvoiService} from '../envoi/envoi.service';
import {Envoi} from '../shared/model/envoi';
import {MenuItem} from 'primeng';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-livraison-coli-update',
    templateUrl: './livraison-coli-update.component.html'
})
export class LivraisonColiUpdateComponent implements OnInit {

    envoi: Envoi;

    coliVolume: number;

    breadcrumbItems: MenuItem[];

    display = false;

    constructor(private envoiService: EnvoiService, private route: ActivatedRoute) {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'envois de coli'});
        this.breadcrumbItems.push({label: 'livraison coli'});

        this.envoi = {};
        this.coliVolume = 0;
    }

    ngOnInit(): void {
        const reference = this.route.snapshot.paramMap.get('reference');
        this.setEnvoi(reference);
    }

    setEnvoi(reference: string): void {
        this.envoiService.findByReference(reference).subscribe(res => {
            this.envoi = res;
            this.coliVolume = this.envoiService.calculerVolume(res);
        });
    }

    back(): void {
        window.history.back();
    }

    onConfirmerReceptionClicked(code: string) {
        console.log(code);
        this.display = false;
    }

    onValiderClicked() {
        this.display = true;
    }
}
