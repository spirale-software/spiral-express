import {Routes} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {CLIENT_ROUTES} from './client/client.route';
import {LIVRAISON_COLI_ROUTES} from './livraison-coli/livraison-coli.route';
import {RECEPTION_COLI_ROUTES} from './reception-coli/reception-coli.route';
import {ENVOI_ROUTES} from './envoi/envoi.route';
import {TableauDeBordComponent} from './tableau-de-bord/tableau-de-bord.component';
import {PARTENAIRE_ROUTES} from './partenaire/partenaire.route';
import {LoginComponent} from './login/login.component';
import {RapportDeLivraisonComponent} from './rapport-de-livraison/rapport-de-livraison.component';
import {DESTINATAIRE_ROUTES} from './destinataire/destinataire.route';
import {RAPPORT_DE_QUAI_ROUTES} from './rapport-de-quai/rapport-de-quai.route';
import {ScanQrcodeComponent} from "./scan-qrcode/scan-qrcode.component";
import {RAPPORT_DE_LIVRAISON_ROUTES} from "./rapport-de-livraison/rapport-de-livraison.route";

export const PAGES_ROUTES: Routes = [
    {
        path: '',
        component: AccueilComponent,
        outlet: 'fake'
    },
    {
        path: '',
        component: TableauDeBordComponent
    },
    {
        path: 'tableau-de-bord',
        component: TableauDeBordComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'scanner-qrcode',
        component: ScanQrcodeComponent
    },
    // {
    //     path: 'rapport-de-livraison',
    //     component: RapportDeLivraisonComponent
    // },
     ...CLIENT_ROUTES,
    ...LIVRAISON_COLI_ROUTES,
    ...RECEPTION_COLI_ROUTES,
    ...ENVOI_ROUTES,
    ...PARTENAIRE_ROUTES,
    ...DESTINATAIRE_ROUTES,
    ...RAPPORT_DE_QUAI_ROUTES,
    ...RAPPORT_DE_LIVRAISON_ROUTES
];
