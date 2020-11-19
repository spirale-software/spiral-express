import {Routes} from "@angular/router";
import {RapportDeLivraisonUpdateComponent} from "./rapport-de-livraison-update.component";
import {RapportDeLivraisonComponent} from "./rapport-de-livraison.component";

export const RAPPORT_DE_LIVRAISON_ROUTES: Routes = [
    { path: 'envois/:reference/rapport-de-livraison', component: RapportDeLivraisonUpdateComponent },
    { path: 'envois/rapport-de-livraison', component: RapportDeLivraisonComponent }
];
