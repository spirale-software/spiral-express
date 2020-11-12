import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {LoginService} from "../login/login.service";

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html'
})
export class AccueilComponent implements OnInit {
    displayLoginDialog = false;

    @Output() authentication = new EventEmitter<boolean>();

    constructor(private loginService: LoginService) {}

    ngOnInit(): void {
    }

    onLoginClicked(): void {
        this.displayLoginDialog = true;
    }

    connecter(login, password) {
        this.displayLoginDialog = false;
        this.loginService
            .login(login, password)
            .subscribe(
                res => { this.authentication.emit(res) },
                error => { this.authentication.emit(false); });

        // setTimeout(() => localStorage.setItem('isAuthenticated', 'true'), 500);

    }
}
