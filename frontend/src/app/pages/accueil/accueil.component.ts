import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";
import {MessageService} from "primeng";

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html'
})
export class AccueilComponent implements OnInit {
    displayLoginDialog = false;

    constructor(private loginService: LoginService, private router: Router, private messageService: MessageService) {}

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
                error => {
                    this.messageService.add({severity: 'error', summary: 'Erreur connexion.', detail: 'Nom d\'utilisateur ou mot de passe incorrect'})
                });
    }
}
