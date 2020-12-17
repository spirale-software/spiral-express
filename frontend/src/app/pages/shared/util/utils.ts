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
            {code: 'BELGIQUE', libelle: 'Belgique', codeTel: 32},
            {code: 'FRANCE', libelle: 'France', codeTel: 33 },
            {code: 'ALLEMAGNE', libelle: 'Allemagne', codeTel: 49 },
            {code: 'LUXEMBOURG', libelle: 'Luxembourg', codeTel: 352 },
            {code: 'CAMEROUN', libelle: 'Cameroun', codeTel: 237},
            {code: 'RWANDA', libelle: 'Rwanda', codeTel: 250},
            {code: 'CONGO_BRAZZAVILLE', libelle: 'Congo brazzavile', codeTel: 242},
            {code: 'BURKINA_FASO', libelle: 'Burkina faso', codeTel: 226}];
    }

    public static getPaysOptions(): SelectItem[] {
        const options: SelectItem[] = [];
        Utils.getAllPays().forEach(pays => {
            options.push({ label: pays.libelle, value: pays.code });
        });
        return options;
    }
}
