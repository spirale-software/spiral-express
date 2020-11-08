import {Component, OnInit} from '@angular/core';
import {Envoi} from '../shared/model/envoi';
import {ActivatedRoute} from '@angular/router';
import {EnvoiService} from '../envoi/envoi.service';
import {MenuItem} from 'primeng';

@Component({
    selector: 'app-rapport-de-quai-update',
    templateUrl: './rapport-de-quai-update.component.html'
})
export class RapportDeQuaiUpdateComponent implements OnInit {

    envoi: Envoi;

    coliVolume: number;

    breadcrumbItems: MenuItem[];

    constructor(private route: ActivatedRoute, private envoiService: EnvoiService) {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'envois de coli'});
        this.breadcrumbItems.push({label: 'rapport de quai'});

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

    onValiderClicked() {
        this.envoiService.update(this.envoi).subscribe(res => {
            console.log('onValiderClicked: ', res);
        });
    }

}
