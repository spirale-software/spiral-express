import {Routes} from '@angular/router';
import {ClientComponent} from './client.component';
import {ClientUpdateComponent} from './client-update.component';
import {DestinataireComponent} from "../destinataire/destinataire.component";

export const CLIENT_ROUTES: Routes = [
    {path: 'clients', component: ClientComponent},
    {path: 'clients/:id/modifier', component: ClientUpdateComponent},
    {path: 'clients/:id/destinataires', component: DestinataireComponent},
    {path: 'clients/creer', component: ClientUpdateComponent}
];
