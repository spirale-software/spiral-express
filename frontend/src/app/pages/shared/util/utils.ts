import {Coli} from "../model/coli";
import {Client} from "../model/client";
import {SelectItem} from "primeng";

export class Utils {

    public static getVolume(coli: Coli): number {
        let volume = 0;
        if (coli) {
            volume = coli.longueur * coli.largeur * coli.hauteur;
        }
        return volume;
    }

    public static getExpediteur(expediteur: Client): string {
        let expediteurNom = '';
        if (expediteur) {
            expediteurNom = expediteur.prenom + ' ' + expediteur.nom;
        }
        return expediteurNom;
    }

    public static getAllPays(): any[] {
        return [
            {code: 'CAMEROUN', libelle: 'Cameroun'},
            {code: 'RWANDA', libelle: 'Rwanda'},
            {code: 'CONGO_BRAZZAVILLE', libelle: 'Congo brazzavile'},
            {code: 'BURKINA_FASO', libelle: 'Burkina faso'}];
    }

    public static getPaysOptions(): SelectItem[] {
        const options: SelectItem[] = [];
        Utils.getAllPays().forEach(pays => {
            options.push({ label: pays.libelle, value: pays.code });
        });
        return options;
    }
}
