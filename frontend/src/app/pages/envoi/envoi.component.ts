import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng';
import {EnvoiService} from './envoi.service';
import {Envoi} from '../shared/model/envoi';
import {Coli} from '../shared/model/coli';
import {Client} from '../shared/model/client';
import {Utils} from "../shared/util/utils";
import {Router} from "@angular/router";

@Component({
    selector: 'app-envoi',
    templateUrl: './envoi.component.html',
    styleUrls: ['./envoi.component.scss']
})
export class EnvoiComponent implements OnInit {

    breadcrumbItems: MenuItem[];

    envois: Envoi[];

    constructor(private envoiService: EnvoiService, private router: Router) {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'envois de coli'});
        this.envois = [];
    }

    ngOnInit(): void {
        this.envoiService.getAll().subscribe(res => {
            this.envois = res;
            console.log(res);
        });
    }

    getVolume(coli: Coli): number {
        return Utils.getVolume(coli);
    }

    navigateTo(envoi): void {
        if (window.innerWidth <= 650) {
            this.router.navigate(['/envois', envoi.id, 'modifier']);
        }
    }

    getExpediteur(expediteur: Client): string {
        return Utils.getExpediteur(expediteur);
    }

    getPaysExpedition(expediteur: Client): string {
        if (expediteur) {
            return expediteur.adresse.pays;
        }
        return null;
    }

    genererDocument(envoiId: number): void {
        this.envoiService.genererDocument(envoiId).subscribe(res => {
            console.log('genererDocument: ', res);
            const file = new Blob([res], {type: 'application/pdf'});
            const fileURL = URL.createObjectURL(file);
            window.open(fileURL);
        });
    }

}

