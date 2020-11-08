import {Component, OnInit, Optional} from "@angular/core";
import {ConfirmationService, DynamicDialogRef, MenuItem, MessageService} from "primeng";
import {ClientService} from "./client.service";
import {Router} from "@angular/router";
import {Client} from "../shared/model/client";

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    providers: [ConfirmationService, MessageService]
})
export class ClientComponent implements OnInit {

    breadcrumbItems: MenuItem[];

    clients: Client[];

    isOpenLikeDialog = false;

    isLoading = false;

    constructor(private clientService: ClientService,
                @Optional() private ref: DynamicDialogRef,
                private confirmationService: ConfirmationService, private router: Router,
                private messageService: MessageService) {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'Clients'});
        this.clients = [];
        // this.clients = [
        //     {id: 1, nom: 'Gérard', prenom: 'Yannick', telephone: '045888888', email: 'contact@lapiemo.com', adresse: {pays: 'Cameroun', ville: 'Douala Bassa'}},
        //     {id: 2, nom: 'Symbol', prenom: 'Yvano', telephone: '045888888', email: 'contact@lapiemo.com', adresse: {pays: 'Tchad', ville: 'Djamena Lac'}},
        //     {id: 3, nom: 'Stephen', prenom: 'Gustave', telephone: '00336989521', email: 'gustave@gmail.com', adresse: {pays: 'Senegal', ville: 'Dakar Centre'}},
        // ];
    }

    ngOnInit(): void {
        this.isOpenLikeDialog = this.ref != null;
        this.isLoading = true;
        this.clientService.findAll().subscribe(
            res => {
                this.clients = res.body;
                this.isLoading = false;
                },
            error => {this.isLoading = false; this.messageService.add({severity:'error', summary:'Erreur', detail:'Erreur dans la récupération des données'})},
            () => this.isLoading = false);
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
            accept: () => this.clientService.deleteById(client.id).subscribe(),
            acceptLabel: 'Oui',
            rejectLabel: 'Non'
        });
    }

    navigateTo(client): void {
        this.router.navigate(['/destinataires/clients', client.id], {state: client});

    }
}

