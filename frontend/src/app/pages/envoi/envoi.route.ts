import {Routes} from '@angular/router';
import {EnvoiComponent} from './envoi.component';
import {EnvoiUpdateComponent} from './envoi-update.component';
import {EnvoiDetailComponent} from './envoi-detail.component';

export const ENVOI_ROUTES: Routes = [
    {path: 'envois', component: EnvoiComponent},
    {path: 'envois/:id/modifier', component: EnvoiUpdateComponent},
    {path: 'envois/creer', component: EnvoiUpdateComponent},
    {path: 'envois/:id/detail', component: EnvoiDetailComponent},
    {path: 'envois/:reference/reference', component: EnvoiDetailComponent}
];
