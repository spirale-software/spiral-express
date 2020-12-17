import {Component, EventEmitter, Input, OnChanges, OnInit, Optional, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DynamicDialogConfig, DynamicDialogRef, SelectItem} from 'primeng';
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

    codePays;

    constructor(private fb: FormBuilder,
                @Optional() private ref: DynamicDialogRef,
                @Optional() private conf: DynamicDialogConfig) {
        this.personne = {} as Personne;
        this.personne.adresse = {} as Adresse;
        this.initForm();

        if (ref) {
            this.isOpenLikePopup = true;
            const personne = this.conf.data;
            console.log(this.conf.data);
            this.personneForm.patchValue(this.conf.data.destinataire);
        }
        this.paysOptions = Utils.getPaysOptions();
    }

    ngOnInit(): void {
    }

    initForm() {
        this.personneForm = this.fb.group({
            nom: [this.personne.nom, Validators.required],
            prenom: [this.personne.prenom, Validators.required],
            telephone: [this.personne.telephone, [Validators.required, Validators.pattern('^[0-9]+$')]],
            email: [this.personne.email, Validators.email],
            adresse: this.fb.group({
                pays: [this.personne.adresse.pays, Validators.required],
                codePostal: [this.personne.adresse.codePostal],
                rue: [this.personne.adresse.rue],
                ville: [this.personne.adresse.ville]
            })
        });

        this.personneForm.get('adresse').get('pays').valueChanges.subscribe(res => {
            const pays = Utils.getAllPays().find(item => item.code === res);
            this.codePays = pays.codeTel;
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


