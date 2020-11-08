import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Envoi} from '../shared/model/envoi';
import {Coli} from "../shared/model/coli";
import {Client} from "../shared/model/client";
import {Adresse} from "../shared/model/adresse";
import {Destinataire} from "../shared/model/destinataire";
import {StatutEnvoi} from "../shared/model/statut-envoi";

@Injectable({providedIn: 'root'})
export class EnvoiService {

    private url = 'api/express/envois';

    private envois: Envoi[] = [];

    constructor(private http: HttpClient) {
    }

    create(envoi: Envoi): Observable<HttpResponse<Envoi>> {
        return this.http.post<Envoi>(this.url, envoi, {observe: 'response'});
        // this.envois.push(envoi);
        // return of(envoi);
    }

    update(envoi: Envoi): Observable<HttpResponse<Envoi>> {
        return this.http.put<Envoi>(this.url, envoi, {observe: 'response'});
        // return null;
    }

    getById(envoiId: number): Observable<Envoi> {
        return this.http.get(`${this.url}/${envoiId}`);
    }

    findByReference(reference: string): Observable<Envoi> {
        return this.http.get(`${this.url}/${reference}/reference`);
    }

    getAll(): Observable<Envoi[]> {
        return  this.http.get<Envoi[]>(this.url);
        // return of(this.getEnvoi());
    }

    genererDocument(envoiId: number): Observable<any> {
        return this.http.get(`${this.url}/${envoiId}/generer-fiche-envoi`, {
            headers: new HttpHeaders().set('Accept', 'application/pdf'), responseType: 'blob'
        });
    }

    calculerVolume(envoi: Envoi) {
        return envoi.coli.hauteur * envoi.coli.largeur * envoi.coli.longueur;
    }

    getEnvoi(): Envoi[] {
        const envoi = {} as Envoi;
        envoi.id = 1;
        envoi.reference = '458962259';
        envoi.statut = StatutEnvoi.PRISE_EN_CHARGE;
        envoi.montant = 50;
        envoi.coli = {} as Coli;
        envoi.coli.description = 'Test';
        envoi.coli.longueur = 15;
        envoi.coli.largeur = 45;
        envoi.coli.hauteur = 10;
        envoi.coli.poids = 7;

        envoi.expediteur = {} as Client;
        envoi.expediteur.nom = 'Lapi Emo';
        envoi.expediteur.prenom = 'Ashanti';
        envoi.expediteur.email = 'ash@spiral.com';
        envoi.expediteur.adresse = {} as Adresse;
        envoi.expediteur.adresse.pays = 'Belgique';

        envoi.destinataire = {} as Destinataire;
        envoi.destinataire.nom = 'Youmpou';
        envoi.destinataire.prenom = 'Tita';
        envoi.destinataire.email = 'yta@spiral.com';
        envoi.destinataire.adresse = {} as Adresse;
        envoi.destinataire.adresse.pays = 'Cameroun';
        envoi.destinataire.adresse.ville = 'Douala Bassa';


        // Envoi 2
        const envoi2 = {} as Envoi;
        envoi2.id = 2;
        envoi2.statut = StatutEnvoi.EN_LIVRAISON;
        envoi2.reference = '898962209';
        envoi2.montant = 50;
        envoi2.coli = {} as Coli;
        envoi2.coli.description = 'Coli fragile';
        envoi2.coli.longueur = 15;
        envoi2.coli.largeur = 45;
        envoi2.coli.hauteur = 10;
        envoi2.coli.poids = 7;

        envoi2.expediteur = {} as Client;
        envoi2.expediteur.nom = 'Koko';
        envoi2.expediteur.prenom = 'Armando';
        envoi2.expediteur.email = 'kar@spiral.com';
        envoi2.expediteur.adresse = {} as Adresse;
        envoi2.expediteur.adresse.pays = 'Belgique';

        envoi2.destinataire = {} as Destinataire;
        envoi2.destinataire.nom = 'Folefack';
        envoi2.destinataire.prenom = 'heman';
        envoi2.destinataire.email = 'yta@spiral.com';
        envoi2.destinataire.adresse = {} as Adresse;
        envoi2.destinataire.adresse.pays = 'Cameroun';
        envoi2.destinataire.adresse.ville = 'Yaoundé Bienmassi';

        // Envoi 3
        const envoi3 = {} as Envoi;
        envoi3.id = 3;
        envoi3.statut = StatutEnvoi.A_ENLEVER;
        envoi3.reference = '582962202';
        envoi3.montant = 50;
        envoi3.coli = {} as Coli;
        envoi3.coli.description = 'Coli fragile';
        envoi3.coli.longueur = 7;
        envoi3.coli.largeur = 10;
        envoi3.coli.hauteur = 9;
        envoi3.coli.poids = 10;

        envoi3.expediteur = {} as Client;
        envoi3.expediteur.nom = 'Koko';
        envoi3.expediteur.prenom = 'Armando';
        envoi3.expediteur.email = 'kar@spiral.com';
        envoi3.expediteur.adresse = {} as Adresse;
        envoi3.expediteur.adresse.pays = 'Belgique';

        envoi3.destinataire = {} as Destinataire;
        envoi3.destinataire.nom = 'Youmbi';
        envoi3.destinataire.prenom = 'Stephen';
        envoi3.destinataire.email = 'yst@spiral.com';
        envoi3.destinataire.adresse = {} as Adresse;
        envoi3.destinataire.adresse.pays = 'Cameroun';
        envoi3.destinataire.adresse.ville = 'Yaoundé Poste Centrale';


        return [envoi, envoi2, envoi3];
    }
}
