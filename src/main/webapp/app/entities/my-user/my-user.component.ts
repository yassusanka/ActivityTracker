import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IMyUser } from 'app/shared/model/my-user.model';
import { AccountService } from 'app/core';
import { MyUserService } from './my-user.service';

@Component({
    selector: 'jhi-my-user',
    templateUrl: './my-user.component.html'
})
export class MyUserComponent implements OnInit, OnDestroy {
    myUsers: IMyUser[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected myUserService: MyUserService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.myUserService.query().subscribe(
            (res: HttpResponse<IMyUser[]>) => {
                this.myUsers = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInMyUsers();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IMyUser) {
        return item.id;
    }

    registerChangeInMyUsers() {
        this.eventSubscriber = this.eventManager.subscribe('myUserListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
