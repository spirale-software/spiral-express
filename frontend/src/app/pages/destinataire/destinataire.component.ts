import {Component, OnInit, Optional} from "@angular/core";
import {DialogService, DynamicDialogRef, MenuItem} from "primeng";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonneUpdateComponent} from "../shared/component/personne/personne-update.component";
import {DestinataireService} from "./destinataire.service";
import {Destinataire} from "../shared/model/destinataire";
import {Client} from "../shared/model/client";

@Component({
    selector: 'app-destinataire',
    templateUrl: './destinataire.component.html',
    providers: [DialogService]
})
export class DestinataireComponent implements OnInit {

    destinataires: Destinataire[];

    isOpenLikeDialog = false;

    breadcrumbItems: MenuItem[];

    client: any;

    clientId: number;

    constructor(@Optional() private ref: DynamicDialogRef, private router: Router,
                private dialogService: DialogService,
                private route: ActivatedRoute,
                private destinataireService: DestinataireService) {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'destinaires du client'});

        if (this.ref) {
            this.isOpenLikeDialog = true;
        }

        // this.client = this.router.getCurrentNavigation().extras.state;
        this.clientId = Number(this.route.snapshot.paramMap.get('clientId'));
    }

    ngOnInit(): void {
        this.destinataireService.findAllByClientId(this.clientId).subscribe(res => {
            this.destinataires = res.body;
            this.setClient();
        });
    }

    setClient() {
        if (this.destinataires.length > 0) {
            this.client = this.destinataires[0].client;
        }
    }

    selectDestinataire(destinataire): void {
        this.ref.close(destinataire);
    }

    navigate(destinataire): void {
        console.log('window.innerWidth: ', window.innerWidth);
        if (window.innerWidth < 650) {
            this.openDialog(destinataire);
        }
    }

    back(): void {
        window.history.back();
    }

    openDialog(destinataire ?: any) {
        let header;
        if (destinataire) {
            header = 'Editer un destinataire';
        } else {
            header = 'Nouveau destinataire';
        }
        const ref = this.dialogService.open(PersonneUpdateComponent, {header, width: '75%', data: {destinataire}});

        ref.onClose.subscribe(res => {
           if (res) {
               destinataire = Object.assign(destinataire, res);
               destinataire.client = {} as Client;
               destinataire.client.id = this.clientId;

               console.log(destinataire);

               if (destinataire.id) {
                   console.log('update');
                   this.destinataireService.update(destinataire).subscribe(() => {
                       this.destinataireService.findAllByClientId(this.clientId).subscribe(res => {
                           this.destinataires = res.body;
                           this.setClient();
                       });
                   });
               } else {
                   this.destinataireService.create(destinataire).subscribe(() => {
                       this.destinataireService.findAllByClientId(this.clientId).subscribe(res => {
                           this.destinataires = res.body;
                           this.setClient();
                       });
                   });
               }


           }
        });
    }
}
