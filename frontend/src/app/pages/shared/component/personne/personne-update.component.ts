import {Component, EventEmitter, Input, OnChanges, OnInit, Optional, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DynamicDialogRef, SelectItem} from 'primeng';
import {Utils} from '../../util/utils';
import {Personne} from "../../model/personne";
import {Adresse} from "../../model/adresse";

@Component({
    selector: 'app-personne-update',
    templateUrl: './personne-update.component.html'
})
export class PersonneUpdateComponent implements OnInit, OnChanges {

    personneForm: FormGroup;

    isOpenLikePopup = false;

    paysOptions: SelectItem[];

    @Input() personne: Personne;

    @Output() onSaveClicked = new EventEmitter<Personne>();

    constructor(private fb: FormBuilder,
                @Optional() private ref: DynamicDialogRef) {
        this.personne = {} as Personne;
        this.personne.adresse = {} as Adresse;
        this.initForm();

        if (ref) {
            this.isOpenLikePopup = true;
        }
        this.paysOptions = Utils.getPaysOptions();
    }




    ngOnInit(): void {
    }

    initForm() {
        this.personneForm = this.fb.group({
            nom: [this.personne.nom],
            prenom: [this.personne.prenom],
            telephone: [this.personne.telephone],
            email: [this.personne.email],
            adresse: this.fb.group({
                pays: [this.personne.adresse.pays],
                codePostal: [this.personne.adresse.codePostal],
                rue: [this.personne.adresse.rue],
                ville: [this.personne.adresse.ville]
            })
        });
    }

    onSaveCliked(): void {
        if (this.ref) {
            this.ref.close(this.personneForm.value);
        }
        this.onSaveClicked.emit(this.personneForm.value);
    }

    closeDialog(): void {
        this.ref.close();
    }

    confirmerSuppression() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges: ', this.personne);
        if (this.personne && this.personneForm) {
            this.personneForm.patchValue(this.personne);
        }

    }
}


