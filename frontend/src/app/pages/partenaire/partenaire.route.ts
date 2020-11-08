import {Routes} from '@angular/router';
import {PartenaireComponent} from './partenaire.component';
import {PartenaireUpdateComponent} from './partenaire-update.component';

export const PARTENAIRE_ROUTES: Routes = [
    { path: 'partenaires', component: PartenaireComponent },
    { path: 'partenaires/:id/modifier', component: PartenaireUpdateComponent },
    { path: 'partenaires/creer', component: PartenaireUpdateComponent }
];
