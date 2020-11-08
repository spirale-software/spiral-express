import {Routes} from '@angular/router';
import {RapportDeQuaiUpdateComponent} from './rapport-de-quai-update.component';
import {RapportDeQuaiComponent} from './rapport-de-quai.component';

export const RAPPORT_DE_QUAI_ROUTES: Routes = [
    { path: 'envois/:reference/rapport-de-quai', component: RapportDeQuaiUpdateComponent },
    { path: 'envois/rapport-de-quai', component: RapportDeQuaiComponent }
];
