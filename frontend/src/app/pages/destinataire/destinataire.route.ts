import {Routes} from '@angular/router';
import {DestinataireComponent} from './destinataire.component';
import {DestinataireUpdateComponent} from './destinataire-update.component';

export const DESTINATAIRE_ROUTES: Routes = [
    // { path: 'destinataires', component: DestinataireComponent },
    { path: 'destinataires/clients/:clientId', component: DestinataireComponent },
    { path: 'destinataires/:id/modifier', component: DestinataireUpdateComponent },
    { path: 'destinataires/creer', component: DestinataireUpdateComponent }
];
