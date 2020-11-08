import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Partenaire} from '../shared/model/partenaire';

@Injectable({providedIn: 'root'})
export class PartenaireService {
    private url = 'api/express/partenaires';

    constructor(private http: HttpClient) {}

    create(partenaire: Partenaire): Observable<HttpResponse<Partenaire>> {
        return this.http.post<Partenaire>(this.url, partenaire, {observe: 'response'});
    }

    update(partenaire: Partenaire): Observable<HttpResponse<Partenaire>> {
        return this.http.put<Partenaire>(this.url, partenaire, {observe: 'response'});
    }

    findById(partenaireId: number): Observable<HttpResponse<Partenaire>> {
        return this.http.get<Partenaire>(`${this.url}/${partenaireId}`, {observe: 'response'});
    }

    findAll(): Observable<HttpResponse<Partenaire[]>> {
        return this.http.get<Partenaire[]>(this.url, {observe: 'response'});
    }

    deleteById(partenaireId: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.url}/${partenaireId}`, {observe: 'response'});
    }
}
