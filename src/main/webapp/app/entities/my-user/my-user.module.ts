import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StucdentdetailsSharedModule } from 'app/shared';
import { StucdentdetailsAdminModule } from 'app/admin/admin.module';
import {
    MyUserComponent,
    MyUserDetailComponent,
    MyUserUpdateComponent,
    MyUserDeletePopupComponent,
    MyUserDeleteDialogComponent,
    myUserRoute,
    myUserPopupRoute
} from './';

const ENTITY_STATES = [...myUserRoute, ...myUserPopupRoute];

@NgModule({
    imports: [StucdentdetailsSharedModule, StucdentdetailsAdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [MyUserComponent, MyUserDetailComponent, MyUserUpdateComponent, MyUserDeleteDialogComponent, MyUserDeletePopupComponent],
    entryComponents: [MyUserComponent, MyUserUpdateComponent, MyUserDeleteDialogComponent, MyUserDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StucdentdetailsMyUserModule {}
