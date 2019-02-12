import { ILocation } from 'app/shared/model//location.model';
import { IUser } from 'app/core/user/user.model';

export interface IMyUser {
    id?: number;
    userName?: string;
    userid?: string;
    location?: ILocation;
    user?: IUser;
}

export class MyUser implements IMyUser {
    constructor(public id?: number, public userName?: string, public userid?: string, public location?: ILocation, public user?: IUser) {}
}
