import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'app-scanner-document',
    templateUrl: './scanner-document.component.html'
})
export class ScannerDocumentComponent {
    @Input() isScannerAllowed = false;

    @Output() scanSuccess = new EventEmitter<number>();

    constructor() {

    }

    onScannerClicked(): void {
        this.isScannerAllowed = true;
    }

    onScanOK(reference): void {
        this.scanSuccess.emit(reference);
    }
}
