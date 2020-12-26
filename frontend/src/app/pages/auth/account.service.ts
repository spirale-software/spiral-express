import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: "root"})
export class AccountService {
    account: any;

    constructor(private http: HttpClient) {
    }

    isAuthenticated(): boolean {
        const token = sessionStorage.getItem('authenticationToken') || localStorage.getItem('authenticationToken');
        return token ? true : false;
    }

    getCurrentAccount(): any {
        if (this.isAccountExists()) {
            return this.getAccount();
        } else {
            this.http.get('api/express/utilisateur-courant')
                .subscribe(
                    res => {
                        this.authenticate(res)
                    },
                    error => {
                    }
                );
        }
    }

    authenticate(account) {
        this.account = account;
        localStorage.setItem('account', JSON.stringify(account));
    }

    getAccount(): any {
        if (this.account) {
            return this.account;
        } else {
            return JSON.parse(localStorage.getItem('account'));
        }
    }

    isAccountExists(): boolean {
        return this.account || localStorage.getItem('account');
    }
}
