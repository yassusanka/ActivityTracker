import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IActivity } from 'app/shared/model/activity.model';

type EntityResponseType = HttpResponse<IActivity>;
type EntityArrayResponseType = HttpResponse<IActivity[]>;

@Injectable({ providedIn: 'root' })
export class ActivityService {
    public resourceUrl = SERVER_API_URL + 'api/activities';

    constructor(protected http: HttpClient) {}

    create(activity: IActivity): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(activity);
        return this.http
            .post<IActivity>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    update(activity: IActivity): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(activity);
        return this.http
            .put<IActivity>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IActivity>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IActivity[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    protected convertDateFromClient(activity: IActivity): IActivity {
        const copy: IActivity = Object.assign({}, activity, {
            activitydate:
                activity.activitydate != null && activity.activitydate.isValid() ? activity.activitydate.format(DATE_FORMAT) : null,
            starttime: activity.starttime != null && activity.starttime.isValid() ? activity.starttime.format(DATE_FORMAT) : null,
            endtime: activity.endtime != null && activity.endtime.isValid() ? activity.endtime.format(DATE_FORMAT) : null
        });
        return copy;
    }

    protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
        if (res.body) {
            res.body.activitydate = res.body.activitydate != null ? moment(res.body.activitydate) : null;
            res.body.starttime = res.body.starttime != null ? moment(res.body.starttime) : null;
            res.body.endtime = res.body.endtime != null ? moment(res.body.endtime) : null;
        }
        return res;
    }

    protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        if (res.body) {
            res.body.forEach((activity: IActivity) => {
                activity.activitydate = activity.activitydate != null ? moment(activity.activitydate) : null;
                activity.starttime = activity.starttime != null ? moment(activity.starttime) : null;
                activity.endtime = activity.endtime != null ? moment(activity.endtime) : null;
            });
        }
        return res;
    }
}
