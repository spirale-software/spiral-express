import {NgModule} from "@angular/core";
import {
    BreadcrumbModule, ButtonModule,
    CardModule, ConfirmDialogModule, DataViewModule, DialogModule, DropdownModule, DynamicDialogModule,
    InputTextareaModule,
    InputTextModule,
    MenubarModule, PanelModule, ProgressSpinnerModule, ToastModule, ToolbarModule, TooltipModule
} from "primeng";

@NgModule({
    imports: [MenubarModule, BreadcrumbModule, CardModule, DataViewModule, InputTextModule, InputTextareaModule,
        DropdownModule, ButtonModule, ToolbarModule, DialogModule, PanelModule, DynamicDialogModule, ConfirmDialogModule,
        ProgressSpinnerModule, ToastModule, TooltipModule],
    exports: [MenubarModule, BreadcrumbModule, CardModule, DataViewModule, InputTextModule, InputTextareaModule,
        DropdownModule, ButtonModule, ToolbarModule, DialogModule, PanelModule, DynamicDialogModule, ConfirmDialogModule,
        ProgressSpinnerModule, ToastModule, TooltipModule]
})
export class PrimengLibModule {

}
