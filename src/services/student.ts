import rp from 'request-promise';
import { inject, injectable, named } from "inversify";

import { IUser } from '../IService'

@injectable()
export default class Student implements IUser {

    constructor() {
    }

    getUserDetailsCB(cb: any): any {
        cb(null, [{ id: 1, name: 'ahcap' }])
    };

    async getUserDetils() {
        return rp({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'get',
            json: true
        });
    };
}