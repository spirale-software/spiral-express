import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng';
import {PartenaireService} from './partenaire.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Partenaire} from "../shared/model/partenaire";

@Component({
    selector: 'app-partenaire-update',
    templateUrl: './partenaire-update.component.html'
})
export class PartenaireUpdateComponent implements OnInit {

    breadcrumbItems: MenuItem[];

    partenaireId: number;

    partenaire: Partenaire;

    titre;

    constructor(private partenaireService: PartenaireService, private route: ActivatedRoute, private router: Router) {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'Clients'});

        if (this.route.snapshot.paramMap.get('id')) {
            this.partenaireId = Number(this.route.snapshot.paramMap.get('id'));
            this.breadcrumbItems.push({label: 'modifier un partenaire'});
            this.titre = 'Modifier un partenaire';
        } else {
            this.breadcrumbItems.push({label: 'créer nouveau partenaire'});
            this.titre = "Création d'un nouveau partenaire";
        }
    }

    ngOnInit(): void {
        if (this.partenaireId) {
            this.partenaireService.findById(this.partenaireId).subscribe(res => {
                this.partenaire = res.body;
            });
        }

    }

    onSaveClicked(partenaire) {
        console.log('partenaire: ', partenaire);
        this.partenaireService.create(partenaire).subscribe(() => this.router.navigate(['/partenaires']));
    }


}
