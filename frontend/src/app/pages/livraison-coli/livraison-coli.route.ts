import {Routes} from "@angular/router";
import {LivraisonColiComponent} from "./livraison-coli.component";
import {LivraisonColiUpdateComponent} from "./livraison-coli-update.component";

export const LIVRAISON_COLI_ROUTES: Routes = [
    { path: 'livraison-coli', component: LivraisonColiComponent },
    { path: 'envois/:reference/livraison-coli', component: LivraisonColiUpdateComponent },
];
