import {NgModule} from '@angular/core';
import {AccueilComponent} from './accueil/accueil.component';
import {RouterModule} from '@angular/router';
import {PAGES_ROUTES} from './pages.route';
import {LoginComponent} from './login/login.component';
import {PrimengLibModule} from './shared/primeng-lib/primeng-lib.module';
import {ClientModule} from './client/client.module';
import {ReceptionColiComponent} from './reception-coli/reception-coli.component';
import {EnvoiModule} from './envoi/envoi.module';
import {SharedModule} from './shared/shared.module';
import {TableauDeBordComponent} from './tableau-de-bord/tableau-de-bord.component';
import {PartenaireModule} from './partenaire/partenaire.module';
import {RapportDeLivraisonComponent} from './rapport-de-livraison/rapport-de-livraison.component';
import {DestinataireModule} from './destinataire/destinataire.module';
import {RapportDeQuaiModule} from './rapport-de-quai/rapport-de-quai.module';
import {LivraisonColiModule} from './livraison-coli/livraison-coli.module';
import {MessageService} from "primeng";
import {ScanQrcodeComponent} from "./scan-qrcode/scan-qrcode.component";
import {RapportDeLivraisonModule} from "./rapport-de-livraison/rapport-de-livraison.module";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

@NgModule({
    imports: [
        RouterModule.forChild(PAGES_ROUTES),
        PrimengLibModule,
        ClientModule,
        EnvoiModule,
        PartenaireModule,
        SharedModule,
        DestinataireModule,
        RapportDeQuaiModule,
        LivraisonColiModule,
        RapportDeLivraisonModule
    ],
    exports: [RouterModule, AccueilComponent],
    declarations: [
        AccueilComponent,
        LoginComponent,
        ReceptionColiComponent,
        TableauDeBordComponent,
        ScanQrcodeComponent
    ],
    providers: [
        MessageService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
    ]
})
export class PagesModule {}
