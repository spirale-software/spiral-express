import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../shared/model/client";

@Injectable({providedIn: 'root'})
export class ClientService {

    private url = 'api/express/clients';

    constructor(private http: HttpClient) {}

    create(client: Client): Observable<HttpResponse<Client>> {
        return this.http.post<Client>(this.url, client, {observe: 'response'});
    }

    update(client: Client): Observable<HttpResponse<Client>> {
        return this.http.put<Client>(this.url, client, {observe: 'response'});
    }

    findAll(): Observable<HttpResponse<Client[]>> {
        return this.http.get<Client[]>(this.url, {observe: 'response'});
    }

    findById(clientId: number): Observable<HttpResponse<Client>> {
        return this.http.get<Client>(this.url, {observe: 'response'});
    }

    deleteById(clientId: number): Observable<any> {
        return this.http.delete(this.url);
    }
}
