import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IMyUser } from 'app/shared/model/my-user.model';
import { MyUserService } from './my-user.service';
import { ILocation } from 'app/shared/model/location.model';
import { LocationService } from 'app/entities/location';
import { IUser, UserService } from 'app/core';

@Component({
    selector: 'jhi-my-user-update',
    templateUrl: './my-user-update.component.html'
})
export class MyUserUpdateComponent implements OnInit {
    myUser: IMyUser;
    isSaving: boolean;

    locations: ILocation[];

    users: IUser[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected myUserService: MyUserService,
        protected locationService: LocationService,
        protected userService: UserService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ myUser }) => {
            this.myUser = myUser;
        });
        this.locationService.query({ filter: 'myuser-is-null' }).subscribe(
            (res: HttpResponse<ILocation[]>) => {
                if (!this.myUser.location || !this.myUser.location.id) {
                    this.locations = res.body;
                } else {
                    this.locationService.find(this.myUser.location.id).subscribe(
                        (subRes: HttpResponse<ILocation>) => {
                            this.locations = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.userService.query().subscribe(
            (res: HttpResponse<IUser[]>) => {
                this.users = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.myUser.id !== undefined) {
            this.subscribeToSaveResponse(this.myUserService.update(this.myUser));
        } else {
            this.subscribeToSaveResponse(this.myUserService.create(this.myUser));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IMyUser>>) {
        result.subscribe((res: HttpResponse<IMyUser>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackLocationById(index: number, item: ILocation) {
        return item.id;
    }

    trackUserById(index: number, item: IUser) {
        return item.id;
    }
}
