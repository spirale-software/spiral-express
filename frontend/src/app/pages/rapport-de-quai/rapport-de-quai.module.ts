import {NgModule} from '@angular/core';
import {RapportDeQuaiComponent} from './rapport-de-quai.component';
import {RapportDeQuaiUpdateComponent} from './rapport-de-quai-update.component';
import {PrimengLibModule} from '../shared/primeng-lib/primeng-lib.module';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [PrimengLibModule, SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
    exports: [],
    declarations: [
        RapportDeQuaiComponent,
        RapportDeQuaiUpdateComponent
    ]
})
export class RapportDeQuaiModule {

}
