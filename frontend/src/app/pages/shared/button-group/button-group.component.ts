import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'app-button-group',
    template: `
        <div>
            <button pButton label="{{ retourLabel }}" class="ui-button-secondary" style="margin-right: 7px"
                    icon="fa fa-chevron-left" (click)="retourClicked.emit()">
            </button>
            <button pButton label="{{ validerLabel }}" icon="fa fa-save" (click)="validerClicked.emit()"></button>
        </div>
    `
})
export class ButtonGroupComponent {
    @Input() retourLabel = 'Retour';
    @Input() validerLabel = 'Enregistrer';
    @Output() retourClicked = new EventEmitter();
    @Output() validerClicked = new EventEmitter();
}
