import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { StucdentdetailsStudentModule } from './student/student.module';
import { StucdentdetailsMyUserModule } from './my-user/my-user.module';
import { StucdentdetailsLocationModule } from './location/location.module';
import { StucdentdetailsActivityModule } from './activity/activity.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        StucdentdetailsStudentModule,
        StucdentdetailsMyUserModule,
        StucdentdetailsLocationModule,
        StucdentdetailsActivityModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StucdentdetailsEntityModule {}
