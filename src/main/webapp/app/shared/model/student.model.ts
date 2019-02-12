import { IUser } from 'app/core/user/user.model';
import { IActivity } from 'app/shared/model//activity.model';

export interface IStudent {
    id?: number;
    studentname?: string;
    studentid?: string;
    user?: IUser;
    students?: IActivity[];
}

export class Student implements IStudent {
    constructor(
        public id?: number,
        public studentname?: string,
        public studentid?: string,
        public user?: IUser,
        public students?: IActivity[]
    ) {}
}
