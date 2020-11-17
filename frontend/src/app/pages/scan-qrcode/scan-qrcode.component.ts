import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: '',
    template: `
        <app-scanner-document (scanSuccess)="onScanSuccess($event)" [isScannerAllowed]="true">
        </app-scanner-document>
    `
})
export class ScanQrcodeComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    onScanSuccess(reference): void {
        this.router.navigate(['/envois', reference, 'reference']);
    }
}
