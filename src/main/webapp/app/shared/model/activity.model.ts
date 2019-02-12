import { Moment } from 'moment';

export interface IActivity {
    id?: number;
    activityname?: string;
    activityid?: string;
    activitydate?: Moment;
    starttime?: Moment;
    endtime?: Moment;
}

export class Activity implements IActivity {
    constructor(
        public id?: number,
        public activityname?: string,
        public activityid?: string,
        public activitydate?: Moment,
        public starttime?: Moment,
        public endtime?: Moment
    ) {}
}
