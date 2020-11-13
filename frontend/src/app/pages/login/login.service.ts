import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: "root"})
export class LoginService {
    private url = 'login';

    constructor(private http: HttpClient) {}

    login(login, password): Observable<any> {
       // return this.http.post('login', {username: login, password});
        // console.log(login);
        // console.log(password);
         return of(true);
    }

    logout(): void {

    }
}
