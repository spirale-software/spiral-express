import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {LocalStorageService, SessionStorageService} from "ngx-webstorage";
import {map} from "rxjs/operators";
import {AccountService} from "../auth/account.service";

type JwtToken = {
    jwt: string;
};

@Injectable({providedIn: "root"})
export class LoginService {
    private url = 'api/express/authenticate';

    constructor(private http: HttpClient, private accountService: AccountService) {}

    login(login, password): Observable<any> {
        return this.http.post(this.url, {username: login, password});
    }

    logout(): void {
        localStorage.removeItem('authenticationToken');
        sessionStorage.removeItem('authenticationToken');
        localStorage.removeItem('account');
        sessionStorage.removeItem('account');
    }

    authenticateSuccess(response: JwtToken, rememberMe: boolean): void {
        const jwt = response.jwt;
        if (rememberMe) {
            localStorage.setItem('authenticationToken', jwt)
          // localStorage.store('authenticationToken', jwt);
        } else {
            sessionStorage.setItem('authenticationToken', jwt)
            // sessionStorage.store('authenticationToken', jwt);
        }
    }
}
