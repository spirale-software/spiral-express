import {Component, OnInit} from '@angular/core';
import {AppComponent} from './app.component';
import {AccountService} from "./pages/auth/account.service";
import {Account} from "./pages/shared/model/account";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {
    account: Account;

    constructor(public app: AppComponent, private accountService: AccountService) {
        this.account = {} as Account;
    }

    ngOnInit(): void {
      //  this.account = this.accountService.getCurrentAccount();
    }

}
