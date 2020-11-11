import {Component, Input} from "@angular/core";

@Component({
    selector: 'app-spinner',
    template: `
        <p-dialog [(visible)]="isLoading" [modal]="true" [closable]="false" [showHeader]="false"
                  [style]="{'width':'100px', 'height':'100px', 'text-align':'center', 'padding-top':'25px'}">
            <p-progressSpinner [style]="{width: '70%', height: '70%'}" strokeWidth="3" fill="#EEEEEE" animationDuration=".5s"></p-progressSpinner>
        </p-dialog>
    `
})
export class SpinnerComponent {

    @Input() isLoading = false;

    constructor() {}
}
