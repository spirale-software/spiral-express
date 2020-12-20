import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class AccountService {

    isAuthenticated(): boolean {
        const token = sessionStorage.getItem('authenticationToken') || localStorage.getItem('authenticationToken');
        return token ? true : false;
    }
}
