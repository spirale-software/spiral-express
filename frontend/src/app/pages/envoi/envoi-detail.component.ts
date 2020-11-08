import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {MenuItem} from "primeng";
import {ActivatedRoute} from "@angular/router";
import {Envoi} from "../shared/model/envoi";
import {EnvoiService} from "./envoi.service";

@Component({
    selector: 'app-envoi-detail',
    templateUrl: './envoi-detail.component.html',
    styles: ['.nom-label{display: block; font-weight: bold }']
})
export class EnvoiDetailComponent implements OnInit, OnChanges {

    breadcrumbItems: MenuItem[];

    @Input() envoi: Envoi;

    @Input() isOpenLikeDialog = false;

    fullNameExpediteur;

    fullNameDestinataire;

    adresseExpediteur;

    adresseDestinataire;

    volume;

    poidsVolumetrique;

    constructor(private route: ActivatedRoute, private envoiService: EnvoiService) {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'envois de coli'});
        this.breadcrumbItems.push({label: 'détail d\'un envoi'});
    }

    ngOnInit(): void {
        const envoiId = this.route.snapshot.paramMap.get('id');
        if (envoiId) {
            this.setEnvoi(Number(envoiId));
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.envoi) {
            this.fullNameExpediteur = this.envoi.expediteur.prenom.toUpperCase() + ' ' + this.envoi.expediteur.nom.toUpperCase();
            this.adresseExpediteur = `${this.envoi.expediteur.adresse.rue} ${this.envoi.expediteur.adresse.codePostal} 
            ${this.envoi.expediteur.adresse.ville} ${this.envoi.expediteur.adresse.pays}`;

            this.fullNameDestinataire = this.envoi.destinataire.prenom.toUpperCase() + ' ' + this.envoi.destinataire.nom.toUpperCase();
            this.adresseExpediteur = `${this.envoi.destinataire.adresse.rue} ${this.envoi.destinataire.adresse.codePostal} 
            ${this.envoi.destinataire.adresse.ville} ${this.envoi.destinataire.adresse.pays}`;

            this.volume = this.envoi.coli.longueur * this.envoi.coli.largeur * this.envoi.coli.hauteur;

            this.poidsVolumetrique = 0;
        }
    }

    setEnvoi(envoiId: number): void {
        this.envoiService.getById(envoiId).subscribe(res => {
           this.envoi = res;
        });
    }

}
