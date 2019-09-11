import rp from 'request-promise';
import { inject, injectable, named } from "inversify";

import { IUser } from '../IService'

@injectable()
export default class User implements IUser {
    
    constructor() {
    }

    getUserDetailsCB(cb: any) {
        throw new Error("Method not implemented.");
    };

    async getUserDetils() {
        return 'not implemented'
    }
}