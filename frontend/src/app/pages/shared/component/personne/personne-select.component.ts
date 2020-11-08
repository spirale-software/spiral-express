import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {PartenaireService} from "../../../partenaire/partenaire.service";
import {ClientService} from "../../../client/client.service";
import {DestinataireService} from "../../../destinataire/destinataire.service";

@Component({
    selector: 'app-personne-select',
    templateUrl: './personne-select.component.html'
})
export class PersonneSelectComponent implements OnInit {

    @Input() isPartenaire = false;

    @Input() isDestinataire = false;

    @Input() clientId;

    @Input() isExpediteur = false;

    @Output() onSelect = new EventEmitter<any>();

    personnes: any[];

    constructor(private partenaireService: PartenaireService,
                private clientService: ClientService,
                private destinataireService: DestinataireService) {
        // this.personnes = [
        //     {id: 1, nom: 'Gérard', prenom: 'Yannick', telephone: '045888888', email: 'contact@lapiemo.com', adresse: {pays: 'Cameroun', ville: 'Douala Bassa'}},
        //     {id: 2, nom: 'Symbol', prenom: 'Yvano', telephone: '045888888', email: 'contact@lapiemo.com', adresse: {pays: 'Tchad', ville: 'Djamena Lac'}},
        //     {id: 3, nom: 'Stephen', prenom: 'Gustave', telephone: '00336989521', email: 'gustave@gmail.com', adresse: {pays: 'Senegal', ville: 'Dakar Centre'}},
        // ];
    }

    ngOnInit(): void {
        if (this.isPartenaire) {
            this.partenaireService.findAll().subscribe(res => this.personnes = res.body);
        }
        if (this.isExpediteur) {
            this.clientService.findAll().subscribe(res => this.personnes = res.body);
        }
        if (this.isDestinataire && this.clientId) {
            this.destinataireService.findAllByClientId(this.clientId).subscribe(res => this.personnes = res.body);
        }
    }

    selectPersonne(personne) {
        this.onSelect.emit(personne);
    }
}
