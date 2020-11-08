import {NgModule} from "@angular/core";
import {PrimengLibModule} from "../shared/primeng-lib/primeng-lib.module";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LivraisonColiComponent} from "./livraison-coli.component";
import {LivraisonColiUpdateComponent} from "./livraison-coli-update.component";

@NgModule({
    imports: [PrimengLibModule, SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
    exports: [],
    declarations: [
        LivraisonColiComponent,
        LivraisonColiUpdateComponent
    ]
})
export class LivraisonColiModule {

}
