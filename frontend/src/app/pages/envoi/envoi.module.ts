import {NgModule} from '@angular/core';
import {EnvoiComponent} from './envoi.component';
import {PrimengLibModule} from '../shared/primeng-lib/primeng-lib.module';
import {EnvoiUpdateComponent} from './envoi-update.component';
import {SharedModule} from '../shared/shared.module';
import {EnvoiDetailComponent} from './envoi-detail.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [PrimengLibModule, SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
    exports: [
        EnvoiDetailComponent
    ],
    declarations: [
        EnvoiComponent,
        EnvoiUpdateComponent,
        EnvoiDetailComponent
    ]
})
export class EnvoiModule {}
