import {Component} from '@angular/core';
import {MenuItem} from 'primeng';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Envoi} from '../shared/model/envoi';
import {Client} from '../shared/model/client';
import {Coli} from '../shared/model/coli';
import {EnvoiService} from './envoi.service';
import {Personne} from '../shared/model/personne';
import {Partenaire} from '../shared/model/partenaire';
import {Destinataire} from '../shared/model/destinataire';
import {StatutEnvoi} from "../shared/model/statut-envoi";
import {Utils} from "../shared/util/utils";
import { JsonpClientBackend } from '@angular/common/http';

@Component({
    selector: 'app-envoi',
    templateUrl: './envoi-update.component.html'
})
export class EnvoiUpdateComponent {

    FLOATING_NUMBER_FORMAT = '[+-]?((\\d+\\.?\\d*)|(\\.\\d+))';

    breadcrumbItems: MenuItem[];

    displayEnvoiDetail = false;

    displayPersonneDetail = false;

    displayExpediteurs = false;

    displayDestinataires = false;

    displayPartenaires = false;

    envoi: Envoi;

    envoiId: number;

    titre: string;

    envoiForm: FormGroup;

    currentDate;

    volume: number;

    poidsVolumetrique: number;

    isVisible = false;

    expediteur: Client;

    destinataire: Destinataire;

    partenaire: Partenaire;

    titreDialog = `Détail de l'envoi`;

    constructor(private router: Router, private fb: FormBuilder,
         private envoiService: EnvoiService, private route: ActivatedRoute) {
        
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'Envois de coli'});

        this.envoiId = + this.route.snapshot.paramMap.get('id');
        this.envoi = {} as Envoi;
        this.initEnvoiForm();

        if (this.envoiId) {
            console.log("envoiId " + this.envoiId);
            this.breadcrumbItems.push({label: 'Modification d\'un envoi'});

            this.envoiService.getById(this.envoiId).subscribe({
                    next: value => {
                        console.log(value);
                        this.envoi = value;
                        this.destinataire = this.envoi.destinataire;
                        this.expediteur = this.envoi.expediteur;
                        this.partenaire = this.envoi.partenaire;
                        this.updateForm();
                    },
                    complete: () => {
                        console.log("complete");
                    }
            }) 

            this.titre = 'Modification Envoi';  

        } else {
            this.breadcrumbItems.push({label: 'encodage nouvel envoi'});
            this.titre = 'Encodage Nouvel Envoi';

            this.envoi.dateCreation = new Date();
            this.envoi.statut = StatutEnvoi.PRISE_EN_CHARGE;

            this.volume = 0;
            this.poidsVolumetrique = 0;

        }

    }

    updateForm() {
        
        this.envoiForm.patchValue(this.envoi);
        const fullNameExpediteur = this.envoi.expediteur.prenom + ' ' + this.envoi.expediteur.nom;
        this.envoiForm.get('expediteur').setValue(fullNameExpediteur);

        const fullNameDestinataire = this.envoi.destinataire.prenom + ' ' + this.envoi.destinataire.nom;
        this.envoiForm.get('destinataire').setValue(fullNameDestinataire);

        const fullNamePartenaire = this.envoi.partenaire ? this.envoi.partenaire?.prenom + ' ' + this.envoi.partenaire?.nom : ' ';
        this.envoiForm.get('partenaire').setValue(fullNamePartenaire);
    }

    back(): void {
        window.history.back();
    }

    onValiderClicked(): void {
        this.closeDialog();
        this.isVisible = true;
        this.displayEnvoiDetail = true;

        this.envoi = Object.assign(this.envoi, this.envoiForm.value);
        this.envoi.destinataire = this.destinataire;
        this.envoi.expediteur = this.expediteur;
        this.envoi.partenaire = this.partenaire;
        console.log('envoi: ', this.envoi);
    }

    onSearchExpediteurClicked(): void {
        this.isVisible = true;
        this.displayExpediteurs = true;
        this.titreDialog = 'Sélectionner un expéditeur.';
    }

    onSearchPartenaireClicked() {
        this.isVisible = true;
        this.displayPartenaires = true;
        this.titreDialog = 'Sélectionner un partenaire.';
    }

    onPartenaireSelect(partenaire: Partenaire) {
       this.closeDialog();
       this.partenaire = partenaire;
       this.envoi.partenaire = partenaire;

       console.log("Choose Partenaire");

       const fullName = partenaire.prenom + ' ' + partenaire.prenom;
       this.envoiForm.get('partenaire').setValue(fullName);
    }

    onExpediteurSelect(expediteur: Client) {
        this.closeDialog();
        this.expediteur = expediteur;

        const fullName = expediteur.prenom + ' ' + expediteur.prenom;
        this.envoiForm.get('expediteur').setValue(fullName);
        this.envoiForm.get('destinataire').setValue(null);
    }

    onDestinataireSelect(destinataire: Destinataire) {
        this.closeDialog();
        this.destinataire = destinataire;

        const fullName = destinataire.prenom + ' ' + destinataire.nom;
        this.envoiForm.get('destinataire').setValue(fullName);
    }

    voirDetailPartenaire() {

    }

    closeDialog() {
        this.isVisible = false;
        this.displayEnvoiDetail = false;
        this.displayPersonneDetail = false;
        this.displayExpediteurs = false;
        this.displayDestinataires = false;
        this.displayPartenaires = false;
    }

    onSearchDestinataireClicked(): void {
        this.isVisible = true;
        this.displayDestinataires = true;
        this.titreDialog = 'Sélectionner un destinataire.';
    }

    validerEnvoi(): void {
        console.log(this.envoi);
        this.closeDialog();
        
        if(this.envoiId) {
            this.envoiService.update(this.envoi).subscribe(
                res => {
                    this.navigateTo()
                }
            );
        }
        else {
            this.envoi.dateCreation = null;
            this.envoiService.create(this.envoi).subscribe(res => {
                this.navigateTo();
            });

        }
    }

    navigateTo() {
        this.router.navigate(['/envois']);
    }

    voirDetailDestinataire(): void {
        this.displayPersonneDetail = true;
    }

    voirDetailExpediteur(): void {
        this.displayPersonneDetail = true;
    }

    initEnvoiForm(): void {
        this.envoiForm = this.fb.group({
            coli: this.fb.group({
                description: [this.envoi.coli?.description, Validators.required],
                longueur: [this.envoi.coli?.longueur, [Validators.required, Validators.pattern(this.FLOATING_NUMBER_FORMAT)]],
                largeur: [this.envoi.coli?.largeur, [Validators.required, Validators.pattern(this.FLOATING_NUMBER_FORMAT)]],
                hauteur: [this.envoi.coli?.hauteur, [Validators.required, Validators.pattern(this.FLOATING_NUMBER_FORMAT)]],
                poids: [this.envoi.coli?.poids, [Validators.required, Validators.pattern(this.FLOATING_NUMBER_FORMAT)]]
            }),
            expediteur: [this.envoi.expediteur?.prenom, Validators.required],
            destinataire: [this.envoi.destinataire?.prenom, Validators.required],
            partenaire: [this.envoi.partenaire?.prenom, Validators.required],
            rapportQuai: [this.envoi.rapportQuai],
            rapportLivraison: [this.envoi.rapportLivraisaon],
            montant: [this.envoi.montant, [Validators.required, Validators.pattern(this.FLOATING_NUMBER_FORMAT)]]
        });

        this.registerChangeInColi();
    }

    registerChangeInColi(): void {
        this.envoiForm.get('coli').valueChanges.subscribe((next: Coli) => {
            if (Number(next.hauteur) && Number(next.largeur) && Number(next.longueur)) {
                this.volume = Utils.getVolume(next);
                this.poidsVolumetrique = Utils.getPoidsVolumetrique(next);
            }
        });
    }
}

