import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Destinataire} from '../shared/model/destinataire';

@Injectable({providedIn: 'root'})
export class DestinataireService {
    private url = 'api/express/destinataires';

    constructor(private http: HttpClient) {
    }

    create(destinataire: Destinataire): Observable<HttpResponse<Destinataire>> {
        return this.http.post<Destinataire>(this.url, destinataire, {observe: 'response'});
    }

    update(destinataire: Destinataire): Observable<HttpResponse<Destinataire>> {
        return this.http.put<Destinataire>(this.url, destinataire, {observe: 'response'});
    }

    findAllByClientId(clientId: number): Observable<HttpResponse<Destinataire[]>>  {
        return this.http.get<Destinataire[]>(`${this.url}/clients/${clientId}`, {observe: 'response'});
    }
}
