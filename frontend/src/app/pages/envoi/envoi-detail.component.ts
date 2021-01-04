import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {MenuItem} from "primeng";
import {ActivatedRoute} from "@angular/router";
import {Envoi} from "../shared/model/envoi";
import {EnvoiService} from "./envoi.service";
import {Utils} from "../shared/util/utils";

@Component({
    selector: 'app-envoi-detail',
    templateUrl: './envoi-detail.component.html',
    styles: ['.nom-label{display: block; font-weight: bold }']
})
export class EnvoiDetailComponent implements OnInit, OnChanges {

    breadcrumbItems: MenuItem[];

    @Input() envoi: Envoi;

    @Input() showHeader = true;

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

        this.envoi = {} as Envoi;
    }

    ngOnInit(): void {
        const envoiId = this.route.snapshot.paramMap.get('id');
        const reference = this.route.snapshot.paramMap.get('reference');
        if (envoiId) {
            this.setEnvoiById(Number(envoiId));
        }
        if (reference) {
            this.setEnvoiByReference(reference);
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.envoi) {
           this.setValues();
        }
    }

    setValues(): void {
        this.fullNameExpediteur = this.envoi?.expediteur?.prenom.toUpperCase() + ' ' + this.envoi?.expediteur?.nom.toUpperCase();
        this.setAdresseExpediteur();

        this.fullNameDestinataire = this.envoi?.destinataire?.prenom.toUpperCase() + ' ' + this.envoi?.destinataire?.nom.toUpperCase();
        this.setAdresseDestinataire();

        this.volume = Utils.getVolume(this.envoi.coli);

        this.poidsVolumetrique = Utils.getPoidsVolumetrique(this.envoi.coli);
    }

    setAdresseExpediteur(): void {
        // this.adresseExpediteur = `${this.envoi?.expediteur?.adresse?.rue} ${this.envoi?.expediteur?.adresse.codePostal}
        //     ${this.envoi?.expediteur?.adresse.ville} ${this.envoi?.expediteur?.adresse.pays}`;

        this.adresseExpediteur = this.envoi.expediteur.adresse.rue ? this.envoi.expediteur.adresse.rue : '';

        this.adresseExpediteur = this.envoi.expediteur.adresse.codePostal ? this.adresseExpediteur + ' '
            + this.envoi.expediteur.adresse.codePostal : this.adresseExpediteur;

        this.adresseExpediteur = this.envoi.expediteur.adresse.ville ?this.adresseExpediteur + ' ' +
            this.envoi.expediteur.adresse.ville : this.adresseExpediteur;

        this.adresseExpediteur = this.adresseExpediteur + ' ' + this.envoi.expediteur.adresse.pays;
    }

    setAdresseDestinataire(): void {
        this.adresseDestinataire = this.envoi.destinataire.adresse.rue ? this.envoi.destinataire.adresse.rue : '';

        this.adresseDestinataire = this.envoi.destinataire.adresse.codePostal ? this.adresseDestinataire + ' '
            + this.envoi.destinataire.adresse.codePostal : this.adresseDestinataire;

        this.adresseDestinataire = this.envoi.destinataire.adresse.ville ? this.adresseDestinataire + ' '
            + this.envoi.destinataire.adresse.ville : this.adresseDestinataire;

        this.adresseDestinataire = this.adresseDestinataire + ' ' + this.envoi?.destinataire?.adresse.pays;
    }

    setEnvoiById(envoiId: number): void {
        this.envoiService.getById(envoiId).subscribe(res => {
           this.envoi = res;
           this.setValues();
        });
    }

    setEnvoiByReference(reference: string): void {
        this.envoiService.findByReference(reference).subscribe(res => {
            this.envoi = res;
            console.log('setEnvoiByReference', this.envoi);
            this.setValues();
        });
    }

}
