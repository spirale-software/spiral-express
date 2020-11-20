import {Component, OnInit} from "@angular/core";
import {ConfirmationService, MenuItem, SelectItem} from "primeng";
import {ClientService} from "./client.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Utils} from "../shared/util/utils";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageUtilService} from "../shared/util/message-util.service";
import {Client} from "../shared/model/client";
import {Adresse} from "../shared/model/adresse";

@Component({
    selector: 'app-client-update',
    templateUrl: './client-update.component.html',
    providers: [ConfirmationService]
})
export class ClientUpdateComponent implements OnInit {

    breadcrumbItems: MenuItem[];

    client: Client;

    clientId;

    titre;

    isLoading = false;

    constructor(private clientService: ClientService, private fb: FormBuilder,
                private confirmationService: ConfirmationService, private router: Router,
                private route: ActivatedRoute, private messageUtilService: MessageUtilService) {

        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'Clients'});


        this.client = {} as Client;
        this.client.adresse = {} as Adresse;
        this.titre = "Création d'un nouveau client";

        this.clientId = this.route.snapshot.paramMap.get('id');
        if (this.clientId) {
            this.breadcrumbItems.push({label: 'Modification d\'un client'});
        } else {
            this.breadcrumbItems.push({label: 'Création nouveau client'});
        }
    }

    ngOnInit(): void {
        if (this.clientId) {
            this.titre = 'Modification d\'un client';
            this.clientService.findById(this.clientId).subscribe(res => {
                console.log('findById: ', res.body);
                this.client = res.body;
            });
        }
    }

    back(): void {
        window.history.back();
    }

    saveClient(personne) {
       this.client = Object.assign(this.client, personne);
       this.enregistrer();
    }

    enregistrer(): void {
        console.log('client: ', this.client);
        this.isLoading = true;
        if (this.client.id) {
            this.clientService
                .update(this.client)
                .subscribe(
                    res => {
                        this.isLoading = false;
                        this.messageUtilService.showSuccessToaster('Succès', 'Le client a bien été mis à jour.');
                        this.router.navigate(['/clients']);
                    },
                    error => {
                        this.isLoading = false;
                        this.messageUtilService.showSuccessToaster('Erreur', 'Une erreur s\'est produite lors de la mise jour du client.');
                    });
        } else {
            this.clientService.create(this.client).subscribe(
                res => {
                    this.isLoading = false;
                    this.messageUtilService.showSuccessToaster('Succès', 'Le client a bien été crée.');
                    this.router.navigate(['/clients']);
                },
                error => {
                    this.isLoading = false;
                    this.messageUtilService.showSuccessToaster('Erreur', 'Une erreur s\'est produite lors de la création du client.');
                });
        }

    }

    confirmerSuppression() {
        this.confirmationService.confirm({
            message: 'Voulez vous vraiment supprimer le client: ' + this.client.nom,
            accept: () => this.clientService.deleteById(this.client.id).subscribe(),
            acceptLabel: 'Oui',
            rejectLabel: 'Non'
        });
    }
}
