import {Component, OnInit} from "@angular/core";
import {ConfirmationService, MenuItem, SelectItem} from "primeng";
import {ClientService} from "./client.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Utils} from "../shared/util/utils";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageUtilService} from "../shared/util/message-util.service";

@Component({
    selector: 'app-client-update',
    templateUrl: './client-update.component.html',
    providers: [ConfirmationService]
})
export class ClientUpdateComponent implements OnInit {

    breadcrumbItems: MenuItem[];

    clientForm: FormGroup;

    client: any;

    paysOptions: SelectItem[];

    clientId;

    titre;

    constructor(private clientService: ClientService, private fb: FormBuilder,
                private confirmationService: ConfirmationService, private router: Router,
                private route: ActivatedRoute, private messageUtilService: MessageUtilService) {

        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'Clients'});


        this.initForm();
        this.client = {};
        this.paysOptions = Utils.getPaysOptions();
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
                this.clientForm.patchValue(res.body);
            });
        }
    }

    back(): void {
        window.history.back();
    }

    initForm() {
        this.clientForm = this.fb.group({
            nom: [],
            prenom: [],
            telephone: [],
            email: [],
            adresse: this.fb.group({
                pays: [],
                codePostal: [],
                rue: [],
                ville: []
            })
        });
    }

    enregistrer(): void {
        console.log('clientForm.value: ', this.clientForm.value);
        this.client = Object.assign(this.client, this.clientForm.value);
        this.clientService.create(this.client).subscribe(
            res => {
                this.messageUtilService.showSuccessToaster('Opération réussie', 'Le client a bien été mis à jour.');
                this.router.navigate(['/clients']);
                },
            error => {});
        // console.log('client: ', this.client);

    }

    confirmerSuppression() {
        this.confirmationService.confirm({
            message: 'Voulez vous vraiment supprimer le client: ' +  this.client.nom,
            accept: () => this.clientService.deleteById(this.client.id).subscribe(),
            acceptLabel: 'Oui',
            rejectLabel: 'Non'
        });
    }
}
