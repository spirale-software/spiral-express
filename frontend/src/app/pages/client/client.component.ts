import {Component, OnInit, Optional} from "@angular/core";
import {ConfirmationService, DynamicDialogRef, MenuItem, MessageService} from "primeng";
import {ClientService} from "./client.service";
import {Router} from "@angular/router";
import {Client} from "../shared/model/client";
import {MessageUtilService} from "../shared/util/message-util.service";

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    providers: [ConfirmationService]
})
export class ClientComponent implements OnInit {

    breadcrumbItems: MenuItem[];

    clients: Client[];

    isOpenLikeDialog = false;

    isLoading = false;

    constructor(private clientService: ClientService,
                @Optional() private ref: DynamicDialogRef,
                private confirmationService: ConfirmationService, private router: Router,
                private messageUtilService: MessageUtilService) {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'Clients'});
        this.clients = [];
    }

    ngOnInit(): void {
        this.isOpenLikeDialog = this.ref != null;
        this.isLoading = true;
        this.clientService.findAll().subscribe(
            res => { this.clients = res.body; this.isLoading = false;},
            error => {
                this.isLoading = false;
                this.messageUtilService.showErrorToaster('Erreur', 'Erreur dans la récupération des données.');
              });
    }

    resetClients(): void {
        this.clientService.findAll().subscribe(res => this.clients = res.body);
    }

    selectClient(client) {
        this.ref.close(client);
    }

    showUpdate(client) {
        if (window.innerWidth <= 650) {
            this.router.navigate(['/clients', client.id, 'modifier']);
        }
    }

    confirmerSuppression(client) {
        this.confirmationService.confirm({
           message: 'Voulez vous vraiment supprimer le client: ' +  client.nom,
            accept: () => this.supprimer(client),
            acceptLabel: 'Oui',
            rejectLabel: 'Non'
        });
    }

    supprimer(client): void {
        this.isLoading = true;
        this.clientService.deleteById(client.id).subscribe(
            res => {
                this.messageUtilService.showSuccessToaster('Succes', 'Le client a bien été supprimé');
                this.isLoading = false
                this.resetClients();
            },
            error => {
                this.messageUtilService.showErrorToaster('Echec', 'Une erreur s\'est produite lors de la suppression');
                this.isLoading = false;
            });
    }

    navigateTo(client): void {
        this.router.navigate(['/destinataires/clients', client.id], {state: client});
    }
}

