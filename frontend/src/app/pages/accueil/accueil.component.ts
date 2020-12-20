import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html'
})
export class AccueilComponent implements OnInit {
    displayLoginDialog = false;

    constructor(private loginService: LoginService, private router: Router) {}

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
                res => { console.log('connecter: ', res); this.loginService.authenticateSuccess(res, false) },
                error => { console.log("Connection ECHEC"); });

        // setTimeout(() => localStorage.setItem('isAuthenticated', 'true'), 500);

    }
}
