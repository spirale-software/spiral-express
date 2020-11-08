import {Component, Input, OnInit} from "@angular/core";
import {MenuItem} from "primeng";

@Component({
    selector: 'app-breadcrumb',
    template: `<div class="small-screen-hide">
        <p-breadcrumb [model]="breadcrumbItems" [home]="{icon: 'fa fa-home'}"></p-breadcrumb>
    </div>`
})
export class BreadcrumbComponent implements OnInit {

    @Input() breadcrumbItems: MenuItem[];

    constructor() {

    }

    ngOnInit(): void {

    }
}

