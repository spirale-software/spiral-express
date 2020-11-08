import {Component, OnInit, Optional} from "@angular/core";
import {DynamicDialogRef, MenuItem} from "primeng";
import {Router} from "@angular/router";
import {Partenaire} from "../shared/model/partenaire";
import {PartenaireService} from "./partenaire.service";

@Component({
    selector: 'app-partenaire',
    templateUrl: './partenaire.component.html'
})
export class PartenaireComponent implements OnInit {

    breadcrumbItems: MenuItem[];

    partenaires: Partenaire[];

    isOpenLikeDialog = false;

    constructor(private router: Router, @Optional() private ref: DynamicDialogRef,
                private partenaireService: PartenaireService) {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'Partenaires'});
        /*this.partenaires = [
            {id: 1, nom: 'Gérard', prenom: 'Yannick', telephone: '045888888', email: 'contact@lapiemo.com', adresse: {pays: 'Cameroun', ville: 'Douala Bassa'}},
            {id: 2, nom: 'Symbol', prenom: 'Yvano', telephone: '045888888', email: 'contact@lapiemo.com', adresse: {pays: 'Tchad', ville: 'Djamena Lac'}},
            {id: 3, nom: 'Stephen', prenom: 'Gustave', telephone: '00336989521', email: 'gustave@gmail.com', adresse: {pays: 'Senegal', ville: 'Dakar Centre'}},
        ];*/

        if (this.ref) {
            this.isOpenLikeDialog = true;
        }
    }

    ngOnInit(): void {
        this.partenaireService.findAll().subscribe(res => this.partenaires = res.body);
    }

    showUpdate(partenaire): void {
        if (window.innerWidth <= 650) {
            this.router.navigate(['/partenaires', partenaire.id, 'modifier']);
        }
    }

    selectPartenaire(partenaire): void {

    }

    confirmerSuppression(partenaire) {

    }
}

