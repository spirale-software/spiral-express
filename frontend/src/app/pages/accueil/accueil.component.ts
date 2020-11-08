import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html'
})
export class AccueilComponent implements OnInit {
    displayLoginDialog = false;

    constructor() {}

    ngOnInit(): void {
    }

    onLoginClicked(): void {
        this.displayLoginDialog = true;
    }

    connecter() {
        this.displayLoginDialog = false;
        setTimeout(() => localStorage.setItem('isAuthenticated', 'true'), 500);

    }
}
