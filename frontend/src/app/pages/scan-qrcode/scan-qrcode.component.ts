import {Component, OnInit} from "@angular/core";

@Component({
    selector: '',
    template: `
        <app-scanner-document (scanSuccess)="onScanSuccess($event)" [isScannerAllowed]="true">
        </app-scanner-document>
    `
})
export class ScanQrcodeComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    onScanSuccess(reference): void {

    }
}
