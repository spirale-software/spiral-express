import {NgModule} from '@angular/core';
import {ButtonGroupComponent} from './button-group/button-group.component';
import {PrimengLibModule} from './primeng-lib/primeng-lib.module';
import {ScannerDocumentComponent} from './component/scanner-document/scanner-document.component';
import {PersonneDetailComponent} from './component/personne/personne-detail.component';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import {CommonModule} from "@angular/common";
import {BreadcrumbComponent} from "./component/breadcrumb/breadcrumb.component";
import {PersonneUpdateComponent} from "./component/personne/personne-update.component";
import {ReactiveFormsModule} from "@angular/forms";
import {PersonneSelectComponent} from "./component/personne/personne-select.component";

@NgModule({
    imports: [PrimengLibModule, ZXingScannerModule, CommonModule, ReactiveFormsModule],
    exports: [
        ButtonGroupComponent,
        ScannerDocumentComponent,
        PersonneDetailComponent,
        BreadcrumbComponent,
        PersonneUpdateComponent,
        PersonneSelectComponent
    ],
    declarations: [ButtonGroupComponent, ScannerDocumentComponent, PersonneDetailComponent, BreadcrumbComponent,
        PersonneUpdateComponent, PersonneSelectComponent]
})
export class SharedModule {
}
