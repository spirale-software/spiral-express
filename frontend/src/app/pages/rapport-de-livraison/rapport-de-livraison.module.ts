import {NgModule} from "@angular/core";
import {RapportDeLivraisonComponent} from "./rapport-de-livraison.component";
import {RapportDeLivraisonUpdateComponent} from "./rapport-de-livraison-update.component";
import {PrimengLibModule} from "../shared/primeng-lib/primeng-lib.module";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EnvoiModule} from "../envoi/envoi.module";

@NgModule({
    imports: [PrimengLibModule, SharedModule, CommonModule, FormsModule, ReactiveFormsModule, EnvoiModule],
    declarations: [RapportDeLivraisonComponent, RapportDeLivraisonUpdateComponent],
    exports: []
})
export class RapportDeLivraisonModule {

}
