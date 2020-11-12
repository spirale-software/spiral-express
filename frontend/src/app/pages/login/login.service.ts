import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class LoginService {
    private url = 'api/login';

    login(login, password): Observable<any> {
        return null;
    }
}
